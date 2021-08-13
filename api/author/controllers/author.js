'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const author = await strapi.services.author.find()
        const divine = author.author_name
        const about = author.about
        return {
            divine,
            about,
            profile_photo: { 
                name: author.profile_photo.name,
                thumbnail_url: author.profile_photo.formats.thumbnail.url
          },
       }
    },
};
