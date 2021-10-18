// ** Require's **
const express = require("express");
const router = express.Router();

//**** Multer ****
const uploadFile = require('../middlewares/productsMulter')

// ** Controller require **
const productsController = require("./../controllers/productsController");

// **** Validaciones ****
const validationsCreate = require('../middlewares/validations/validationsCreate');

router.get("/detalles", productsController.detalles);

router.get("/carrito", productsController.carrito);
router.post("/carrito/:id", productsController.añadirAlCarrito)

router.get("/create", productsController.agregarProducto);
router.post("/create", uploadFile.single("image"), validationsCreate, productsController.store)

router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", validationsCreate, productsController.update);

router.get("/detalles/:id", productsController.detalles);

router.delete('/delete/:id', productsController.destroy)

router.get('/ofertas', productsController.ofertas)

module.exports = router;
