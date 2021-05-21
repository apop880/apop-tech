const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const os = require('os');
const fetch = require('node-fetch');
const parser = require('node-html-parser');
const dateFormatter = require('./components/dateFormatter');
const token = process.env.STRAPI_GRAPHQL;
const postsPerPage = process.env.POSTS_PER_PAGE || 5;

/**
 * Hooks! 
 * 
 * Lifecycle hooks are the backbone of how you can have complete control over the output of your site.
 * Hooks are enforced via the hookInterface 'contract' defined here: 
        https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
 *
 * If you read the hookInterface spec closely you'll see that each defined hook gets specific 'props' along with which of those props is 'mutable'.
 * 
 * If you're a fan of 'pure' functions in JS, mutating props will probably set off alarm bells in your head. Fear not, instead of burying 
 * what is mutating things deep in your application, you'll know it is probably in this file.
 *
 * Also, to help keep mutation predictable each 'hook' limits which 'props' can be manipulated and where. 
 * 
 */

const hooks = [
  {
    hook: 'html',
    name: 'ariaHidden',
    description: "Parses the HTML for missing aria-hidden tags on iconify icons.",
    priority: 1,
    run: async ({ htmlString }) => {
      const parsedHTML = parser.parse(htmlString);
      const icons = parsedHTML.querySelectorAll('.iconify');
      [...icons].forEach(icon => {
        if(icon.getAttribute("aria-hidden") === "") {
          icon.setAttribute("aria-hidden", "true");
        }
      });
      return {
        htmlString: parsedHTML.toString()
      };
    },
  },
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },

  // Below are some hooks to try and play with to get a better feel of what is possible.

  {
    hook: 'bootstrap',
    name: 'addNavToData',
    description: 'Add the site navigation to the data object',
    priority: 50,
    run: async ({ request, data }) => {
      return {
          data: {
            ...data,
            nav: [
              {name: "Posts", permalink: "/posts"},
              {name: "Smart Home", children: [
                {name: "Smart Home 101", permalink: "/posts/smart-home-101"},
                {name: "My Smart Home", permalink: "/smart-home"}
              ]},
              {name: "About", children: [
                {name: "Resumé", permalink: "/resume"},
                {name: "Projects", permalink: "/projects"}
              ]},
              {name: "Services", permalink: "/services"},
              {name: "Contact", permalink: "/contact"}
            ],
          },
        };
    },
  },

  //deprcated REST API call to reduce overfetching, see new GraphQL call below
  // {
  //   hook: 'bootstrap',
  //   name: 'addBlogToData',
  //   description: 'Add blog posts to the data object',
  //   priority: 50,
  //   run: async ({ request, data }) => {
  //     const token = process.env.STRAPI_TOKEN;
  //     const url = 'http://localhost:1337/posts?_sort=PublishDate:DESC';
  //     let posts = await fetch(url, {headers: {'Authorization': token, 'accept': 'application/json'}}).then(res => res.json());
  //     posts.forEach(post => {
  //       post.PublishDate = dateFormatter(post.PublishDate);
  //     })
  //     return {
  //         data: {
  //           ...data,
  //           posts: posts
  //         },
  //       };
  //   },
  // },

    {
      hook: 'bootstrap',
      name: 'addBlogToData',
      description: 'Add blog posts to the data object',
      priority: 50,
      run: async ({ request, data }) => {
        const url = 'http://localhost:1337/graphql';
        let posts = await fetch(url, {
          method: 'POST',
          headers: {'Authorization': token, 'Content-Type': 'application/json', 'accept': 'application/json'},
          body: JSON.stringify({
            query: `{
              posts(sort: "PublishDate:desc") {
                Title
                featuredPhoto {
                  url
                  alternativeText
                }
                hidePhotoOnPost
                Body
                slug
                PublishDate
                RevisionDate
                Excerpt
                tags {
                  slug,
                  Name
                }
              }
            }`
          })
        }).then(res => res.json())
        .then(json => json.data.posts);
        posts.forEach(post => {
          post.PublishDate = dateFormatter(post.PublishDate);
          if(post.RevisionDate !== null) {
            post.RevisionDate = dateFormatter(post.RevisionDate);
          }
        })
        return {
          data: {
            ...data,
            posts: posts
          },
        };
      },
  },

  {
    hook: 'allRequests',
    name: 'blogRequests',
    description: 'Add blog posts to request',
    priority: 1, // default
    run: async ({ allRequests, data }) => {
      const blogRequests = data.posts.map((post) => ({
        slug: post.slug,
        hero: true,
        route: 'blog'
      }));
      return {
        allRequests: [...allRequests, ...blogRequests]
      }
    },
  },

  {
    hook: 'bootstrap',
    name: 'blogArchiveData',
    description: 'Add blog archives to data',
    priority: 25,
    run: async ({ data }) => {
      //main archive
      const archivePages = Math.ceil(data.posts.length / postsPerPage);

      //tag archives
      let tagPages = [];
      const url = 'http://localhost:1337/graphql';
      const tags = await fetch(url, {
        method: 'POST',
        headers: {'Authorization': token, 'Content-Type': 'application/json', 'accept': 'application/json'},
        body: JSON.stringify({
          query: `{
            tags(sort: "name") {
              id
              slug
              Name
              SinglePage
            }
          }`
        })
      }).then(res => res.json())
      .then(json => json.data.tags);
      for (const tag of tags) {
        const tagPosts = await fetch(url, {
          method: 'POST',
          headers: {'Authorization': token, 'Content-Type': 'application/json', 'accept': 'application/json'},
          body: JSON.stringify({
            query: `{
              postsConnection(where: {tags: {id: "${tag.id}"}}) {
                aggregate {
                  count
                }
              }
            }`
          })
        }).then(res => res.json())
        .then(json => json.data.postsConnection.aggregate.count);
        if(tagPosts > 0 && tag.SinglePage) {
          tagPages.push( {
            slug: tag.slug,
            name: tag.Name,
            count: 1,
            single: true
          } );
        }
        else if(tagPosts > 0) {
          tagPages.push( {
            slug: tag.slug,
            name: tag.Name,
            count: Math.ceil(tagPosts / postsPerPage)
          } );
        }
      }

      //month archives
      let monthPages = []
      let curMonth = null;
      let i = 0;
      let date;
      data.posts.forEach(post => {
        date = dateFormatter(post.PublishDate, 1);
        if (date.slug !== curMonth) {
          if (curMonth !== null) {
            monthPages[monthPages.length - 1].count = Math.ceil(i / postsPerPage);
          }
          curMonth = date.slug;
          monthPages.push( {
            slug: curMonth,
            name: date.display,
            path: date.path
          } );
          i = 0;
        }
        i++;
      })
      monthPages[monthPages.length - 1].count = Math.ceil(i / postsPerPage);

      return {
        data: {
          ...data,
          archivePages: archivePages,
          tagPages: tagPages,
          monthPages: monthPages
        }
      }
    }
  },

  {
    hook: 'stacks',
    name: 'addAnalytics',
    description: 'Add analytics script to footer.',
    priority: 1,
    run: async ({ footerStack }) => {
      return {
        footerStack: [
          {
            source: 'elderAddAnalytics',
            string: `<script async defer data-domain="apop.tech" src="https://analytics.apop.tech/js/plausible.js"></script>`,
            priority: 99,
          },
          ...footerStack,
        ],
      };
    },
  },

  // {
  //   hook: 'allRequests',
  //   name: 'blogArchiveRequests',
  //   description: 'Add blog archive pages to request and data',
  //   priority: 2, // default
  //   run: async ({ allRequests, data }) => {
  //     //main archive
  //     let archiveRequests = [{ slug: "archive", hero: true, route: "archive" }]
  //     if(data.posts.length > 5) {
  //       let i = 1;
  //       let j = 5;
  //       while(j < data.posts.length) {
  //         archiveRequests = [...archiveRequests, {slug: "archive", page: i, hero: true, route: "archive"}]
  //         i++;
  //         j+=5;
  //       }
  //     }
  //     archiveRequests[archiveRequests.length - 1].last = true;
      
  //     //archive by tag (old REST request)
  //     // const url = 'http://localhost:1337/tags';
  //     // const tags = await fetch(url, {headers: {'Authorization': token, 'accept': 'application/json'}}).then(res => res.json());
  //     // tags.forEach(tag => {
  //     //   archiveRequests = [...archiveRequests, {slug: "tag", tag: tag.slug, tagName: tag.Name, hero: true}]
  //     //   if(tag.posts.length > 5) {
  //     //     let i = 1;
  //     //     let j = 5;
  //     //     while(j < tag.posts.length) {
  //     //       archiveRequests = [...archiveRequests, {slug: "tag", tag: tag.slug, page: i, hero: true}]
  //     //       i++;
  //     //       j+=5;
  //     //     }
  //     //   }
  //     //   archiveRequests[archiveRequests.length - 1].last = true;
  //     // });

  //     //archive by tag
  //     const url = 'http://localhost:1337/graphql';
  //     const tags = await fetch(url, {
  //       method: 'POST',
  //       headers: {'Authorization': token, 'Content-Type': 'application/json', 'accept': 'application/json'},
  //       body: JSON.stringify({
  //         query: `{
  //           tags {
  //             id
  //             slug
  //             Name
  //           }
  //         }`
  //       })
  //     }).then(res => res.json())
  //     .then(json => json.data.tags);
  //     for (const tag of tags) {
  //       const tagPosts = await fetch(url, {
  //         method: 'POST',
  //         headers: {'Authorization': token, 'Content-Type': 'application/json', 'accept': 'application/json'},
  //         body: JSON.stringify({
  //           query: `{
  //             postsConnection(where: {tags: {id: "${tag.id}"}}) {
  //               aggregate {
  //                 count
  //               }
  //             }
  //           }`
  //         })
  //       }).then(res => res.json())
  //       .then(json => json.data.postsConnection.aggregate.count);
  //       if(tagPosts > 0) {
  //         archiveRequests = [...archiveRequests, {slug: "tag", tag: tag.slug, tagName: tag.Name, hero: true, route: "archive"}];
  //       }
  //       if(tagPosts > 5) {
  //         let i = 1;
  //         let j = 5;
  //         while(j < tagPosts) {
  //           archiveRequests = [...archiveRequests, {slug: "tag", tag: tag.slug, page: i, hero: true, route: "archive"}];
  //           i++;
  //           j+=5;
  //         }
  //       }
  //       archiveRequests[archiveRequests.length - 1].last = true;
  //     };


  //     //archive by month
  //     let curMonth = null;
  //     let i = 0;
  //     let j = 0;
  //     data.posts.forEach(post => {
  //       const date = dateFormatter(post.PublishDate, 1);
  //       if (date.slug !== curMonth) {
  //         curMonth = date.slug;
  //         i = 0;
  //         j = 0;
  //         archiveRequests[archiveRequests.length - 1].last = true;
  //         archiveRequests = [...archiveRequests, {slug: date.slug, path: date.path, name: date.display, hero: true, route: "archive"}]
  //       }
  //       j++;
  //       if (j === 5) {
  //         i++;
  //         j = 0;
  //         archiveRequests = [...archiveRequests, {slug: date.slug, path: date.path, name: date.display, page: i, hero: true, route: "archive"}]
  //       }
  //     })
  //     archiveRequests[archiveRequests.length - 1].last = true;
  //     return {
  //       allRequests: [...allRequests, ...archiveRequests]
  //     }
  //   },
  // },
  

  // {
  //   hook: 'allRequests',
  //   name: 'markdownHero',
  //   description: 'Add collected md files to allRequests array using the frontmatter slug or filename as the slug.',
  //   priority: 1, // default
  //   run: async ({ allRequests }) => {
  //     allRequests.forEach(request => {
  //       if(request.route === "blog") {
  //         request.hero = true;
  //       }
  //     })
  //     return {
  //       allRequests: allRequests
  //     }
  //   },
  // },

  // {
  //   hook: 'bootstrap',
  //   name: 'populateDataForAllRequests',
  //   description:
  //     'The goal of this hook is to show you that you can get data from anywhere and add it to the data object.',
  //   priority: 50,
  //   run: async ({ data }) => {
  //     // when you uncomment this, check the homepage for a new box at the top.
  //     return {
  //       data: {
  //         ...data,
  //         testingHooks: true,
  //         // here we are using the 'os' node.js native, and passing in data on the number of CPUs
  //         cpus: os.cpus(),

  //         // NOTE: here we are polluting the global data object across all 'requests' because we are using the 'bootstrap' hook.
  //         // This is bad practice in this example because cpus is only used by Home.svelte, but it is illustrated to show how you could
  //         // add global data.

  //         // IMPORTANT: If you want to add data to a specific route only, you should probably do it in your /route.js for that route.
  //       },
  //     };
  //   },
  // },

  // If you'd like to see specific examples of how to do things that you think could help improve the template please create a GH issue.
];
module.exports = hooks;
