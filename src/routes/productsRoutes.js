// ** Require's **
const express = require("express");
const router = express.Router();

//**** Multer ****
const uploadFile = require('../middlewares/productsMulter')

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
