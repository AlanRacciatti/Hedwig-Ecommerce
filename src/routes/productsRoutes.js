const productsController = require("./../controllers/productsController");

const express = require("express");
const router = express.Router();

router.get("/", productsController.index);

router.get("/detalles", productsController.detalles);

router.get("/carrito", productsController.carrito);

module.exports = router;
