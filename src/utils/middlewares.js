const Busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  formData(req, res, next) {
    const busboy = new Busboy({ headers: req.headers });

    req.body = {};

    busboy.on('field', (key, val) => {
      req.body[key] = val;
    });

    busboy.on('file', (key, file) => {
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: 'mercashop-preset' },
        (err, res) => {
          if (err) throw "Algo salió mal"

          req.body[key] = res;
          next();
        }
      );

      file.on('data', data => {
        stream.write(data);
      });

      file.on('end', () => {
        stream.end();
      });
    });

    // busboy.on('finish', () => {
    //   next();
    // });

    req.pipe(busboy);
  }
}