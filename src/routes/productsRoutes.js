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

router.put("/carrito/cantidadProductos/:id", productsController.cantidadProductos)

router.get("/carrito", productsController.carrito);
router.post("/carrito/:id", productsController.añadirAlCarrito)

router.get("/create", productsController.agregarProducto);
router.post("/create", uploadFile.single("image"), validationsCreate, productsController.store)

router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", validationsCreate, productsController.update);

router.get("/detalles/:id", productsController.detalles);

router.delete('/delete/:id', productsController.destroy)

router.get('/ofertas', productsController.ofertas)
router.get('/novedades', productsController.novedades)

router.delete('/carrito/delete/:id', productsController.eliminarDelCarrito)

router.post('/test', productsController.cantidadProductos)

router.get("/genero", productsController.librosGenero)
router.get("/autor", productsController.librosAutor)
// Api

router.get("/api/v1/cantidadGeneros", productsController.cantidadGeneros);

router.get("/api/v1/productoParticular/:id", productsController.productoParticular);

router.get("/api/v1/ultimoProducto", productsController.ultimoProducto)

router.get("/api/v1/info", productsController.infoProductos);

router.get("/api/v1/autores", productsController.infoAutores)

router.get("/api/v1/topLibros", productsController.topLibros)
router.get("/api/v1/topAutores", productsController.topAutores)

router.get("/api/v1/generos", productsController.infoGeneros)

module.exports = router;
