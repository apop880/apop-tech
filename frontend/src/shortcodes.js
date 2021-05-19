/**
 * Shortcodes are a useful way of making content that lives in a CMS or in markdown files dynamic.
 *
 * By default, Elder.js ships with a {{svelteComponent name="" props="" options="" /}} shortcode.
 * Try adding a clock to one of your markdown files with:
 * `{{svelteComponent name="Clock" options='{"preload":true}' props='{"foo": true}' /}}`
 *
 */

module.exports = [
  {
    /**
     * This is a simple shortcode that will wrap content with a magical box.
     * Try adding `{{box class="yellow"}}Your content here{{/box}}` in one of your markdown files.
     * */
    shortcode: 'box',
    run: async ({ content, props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="box ${props.class}">${content}</div>`,

        // This is added to the page's css through the cssStack. You probably want an external css file for most usecases.
        css: '.box{border:1px solid red; padding: 1rem; margin: 1rem 0;} .box.yellow {background: lightyellow;}',

        // Javascript that is added to the footer via the customJsStack.
        js: '<script>var test = true;</script>',

        // Arbitrary HTML that is added to the head via the headStack
        head: '<meta test="true"/>',
      };
    },
  },

  {
    /* {sizedPicture src="" alt="" float=(optional, defaults to centered) width=x}
     * Creates a div sized to a max-width to put a picture shortcode inside.
     * Optional float parameter will float the image to the left or the right on displays > 768px */
    shortcode: 'sizedPicture',
    run: async ({ props, helpers }) => {
      const innerShortcode = helpers.images.picture(props.src, {alt: props.alt, maxWidth: props.width});
      const className = props['src'].replace(/[^a-zA-Z]+/g, '');
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<div class="${className}">${innerShortcode}</div>`,
        css: `
        .${className} {
          margin-left: auto;
          margin-right: auto;
          max-width: ${props.width}px;
        }

        ${props.float === "left" ? `
            @media (min-width: 768px) {
              .${className} {
                margin: 0 10px 10px 0;
                float: left;
                width: ${props.width}px;
              }
            }
          `
          : props.float === "right" ? `
              @media (min-width: 768px) {
                .${className} {
                  margin: 0 0 10px 10px;
                  float: right;
                  width: ${props.width}px;
                }
              }
            `
          : ``}
        `
      };
    },
  },

  {
    /* {external url="https://..." text="link text" /}
     * Creates a link that opens in a new window securely */
    shortcode: 'external',
    run: async ({ props }) => {
      return {
        // this is what the shortcode is replaced with. You CAN return an empty string.
        html: `<a href="${props.url}" target="_blank" rel="noopener">${props.text}</a>`,
      };
    },
  },

  /**
   *
   * A common issue with static content is that someone will need to go back and update that content.
   * * Imagine you have your content in a CMS such as WordPress, Contentful, Prismic, or even a markdown file.
   * * Within this content some "decision maker" has decided that you need to display the number of pages on your site... and it always has to be accurate.
   *
   * Usually pulling this off would require you to put a placeholder like {{numberOfPages /}} and then preprocessing the content, counting the number of pages, and then rendering it.
   *
   * With Elder.js shortcodes, all the preprocessing is done for you, you just need to decide what you want to replace it with.
   *
   * Below is code for the usecase above.
   *
   * It is important to note, even if you wanted {{latestInstagramPhoto /}} to be shown, the same approach would apply. Just use something like
   * `node-fetch` to hit Instagram's API and specify what html, css, js you'd like to add to the page.
   *
   * */

  {
    shortcode: 'numberOfPages',
    run: async ({ allRequests }) => {
      // allRequests represents 'request' objects for all of the pages of our site, if we know the length of that we know the length of our site.
      return {
        html: allRequests.length,
        // other values can be omitted.
      };
    },
  },
];
