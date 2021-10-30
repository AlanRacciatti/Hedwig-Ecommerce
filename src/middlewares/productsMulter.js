const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// ** Multer config *

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "products"
    }
});


const uploadFile = multer({ storage: storage });

module.exports = uploadFile;