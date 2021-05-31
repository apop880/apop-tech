module.exports = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by /plugins/elder-plugin/markdown/index.js
  // This example is designed to show you the power of plugins.

  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  // This is telling the simple markdown plugin, which route to control.

  data: async ({ request, data, helpers, settings }) => {
    let prevPost = {};
    let nextPost = {};
    let { Title, Excerpt, PublishDate, RevisionDate, featuredPhoto, hidePhotoOnPost, tags, Body } = data.posts[request.index];
    if (request.index !== 0) {
      prevPost.slug = data.posts[request.index-1].slug;
      prevPost.title = data.posts[request.index-1].Title;
    }
    if (request.index < data.posts.length) {
      nextPost.slug = data.posts[request.index+1].slug;
      nextPost.title = data.posts[request.index+1].Title;
    }

    const MDImgRegex = /!\[([A-Za-z-_ \d]*)\]\(([^)]*)\)/gm;
    let match;
    while ((match = MDImgRegex.exec(Body)) !== null) {
      const [fullMatch, alt, src] = match;
      Body = Body.replace(
        fullMatch,
        `<div class="md-img">${settings.shortcodes.openPattern}picture alt="${alt}" src="${src}" /${settings.shortcodes.closePattern}</div>`,
      );
    }

    const MD = await helpers.markdownParser.process(Body);

    return {
      Title,
      Excerpt,
      PublishDate,
      RevisionDate,
      featuredPhoto,
      hidePhotoOnPost,
      tags,
      Body: MD,
      prevPost,
      nextPost
    }
  },
  all: () => [],
  permalink: ({ request }) => `/posts/${request.slug}/`,
};