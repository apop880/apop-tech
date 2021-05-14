const dateFormatter = require('../../components/dateFormatter');
const postsPerPage = process.env.POSTS_PER_PAGE || 5;

module.exports = {

  all: async ({ data }) => {
    let archiveRequests = [{ slug: "archive", hero: true }];
    for(let i=1; i < data.archivePages; i++) {
      archiveRequests.push({ slug: "archive", hero: true, page: i });
    }
    archiveRequests[archiveRequests.length - 1].last = true;

    for (const tag of data.tagPages) {
      archiveRequests.push({ slug: "tag", tag: tag.slug, tagName: tag.name, hero: true });
      if("single" in tag) {
        archiveRequests[archiveRequests.length - 1].single = true;
      }
      for(let i=1; i < tag.count; i++) {
        archiveRequests.push({ slug: "tag", tag: tag.slug, tagName: tag.name, hero: true, page: i });
      }
      archiveRequests[archiveRequests.length - 1].last = true;
    }

    for (const month of data.monthPages) {
      archiveRequests.push({ slug: month.slug, path: month.path, name: month.name, hero: true });
      for(let i=1; i < month.count; i++) {
        archiveRequests.push({ slug: month.slug, path: month.path, name: month.name, hero: true, page: i });
      }
      archiveRequests[archiveRequests.length - 1].last = true;
    }

    return archiveRequests;
  },
  permalink: ({ request }) => {
    if("page" in request) {
      if("tag" in request) {
        return `/posts/${request.tag}/${request.page}`;
      }
      if("path" in request) {
        return `/posts/${request.path}/${request.page}`
      }
      return `/posts/${request.page}`;
    }
    if("tag" in request) {
      return `/posts/${request.tag}/`;
    }
    if("path" in request) {
      return `/posts/${request.path}`;
    }
    return `/posts/`
  },
  data: async ({ request, data }) => {
    let archiveData = {title: "Archived Posts"}
    let postCopy = [...data.posts];
    if("tag" in request) {
      archiveData.title = "Posts Tagged " + request.tagName;
      postCopy = postCopy.filter(post => {
        return post.tags.some(tag => request.tag === tag.slug)
      })
    }
    else if("path" in request) {
      //monthly archive
      archiveData.title = "Posts from " + request.name;
      postCopy = postCopy.filter(post => {
        return dateFormatter(post.PublishDate, 1).slug === request.slug;
      })
    }
    if("page" in request) {
      archiveData.archive = postCopy.slice(request.page * postsPerPage, request.page * postsPerPage + postsPerPage);
    }
    else if("single" in request) {
      archiveData.archive = postCopy;
    }
    else {
      archiveData.archive = postCopy.slice(0, postsPerPage);
    }

    return archiveData;
  }
};


