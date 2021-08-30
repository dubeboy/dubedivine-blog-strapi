module.exports = ({ env }) => ({
  // ... // Add more plugin settings here like the github plug in
  upload: {
    provider: 'cloudinary', // you can set the provider to be aws-s3 too if yould like
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
