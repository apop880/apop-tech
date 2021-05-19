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
    let { Title, Excerpt, PublishDate, featuredPhoto, hidePhotoOnPost, tags, Body } = data.posts.find(post => post.slug === request.slug);

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
      featuredPhoto,
      hidePhotoOnPost,
      tags,
      Body: MD
    }
  },
  all: () => [],
  permalink: ({ request }) => `/posts/${request.slug}/`,
};