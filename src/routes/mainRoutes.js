const mainControllers = require("../controllers/mainController");

const express= require("express");

const router = express.Router() 
router.get("/", mainControllers.index);

module.exports = router