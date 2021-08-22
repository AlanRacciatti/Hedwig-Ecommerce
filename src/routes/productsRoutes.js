// ** Require's **
const express = require("express");
const router = express.Router();

const path = require('path');
const multer = require('multer');

// ** Multer config *
const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);
    }
});

const uploadFile = multer({ storage: configuracionImagen });

// ** Controller require **
const productsController = require("./../controllers/productsController");

router.get("/", productsController.products);

router.get("/detalles", productsController.detalles);

router.get("/carrito", productsController.carrito);

router.get("/create", productsController.agregarProducto);
router.post("/create", uploadFile.single("image"), productsController.store)

router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", productsController.update);

router.get("/detalles/:id", productsController.detalles);

router.delete('/delete/:id', productsController.destroy)
module.exports = router;
