const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

const path = require('path');
const multer = require('multer');

// ** Multer config *
const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);
    }
});

const uploadFile = multer({ storage: configuracionImagen });

router.get("/register", controladorUsers.register);
router.post("/register", uploadFile.single("image") ,controladorUsers.createAccount);

router.get("/login", controladorUsers.login);
router.post('/login', controladorUsers.loginAccount)

module.exports = router;
