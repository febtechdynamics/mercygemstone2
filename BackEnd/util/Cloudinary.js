const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploads = (File, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      File,
      { resource_type: "auto", folder: folder },
      (err, result) => {
        if (err) return reject(err);
        return resolve({
          url: result.url,
          id: result.public_id,
        });
      }
    );
  });
};

exports.deleteImage = (id) => {
  cloudinary.api
    .delete_resources([{ id }], { type: "upload", resource_type: "image" })
    .then(console.log);
};
