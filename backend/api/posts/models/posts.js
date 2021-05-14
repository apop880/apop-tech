'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 module.exports = {
    lifecycles: {
        async afterUpdate(result) {
          console.log("afterupdate");
          console.log(result);
          //if result.published_at !== null then rebuild
        },
      },
};
