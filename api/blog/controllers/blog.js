'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;
    return await strapi.services.blog.findOne({slug: slug})
  },
};
