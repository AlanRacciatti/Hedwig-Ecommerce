const mainControllers = require("../controllers/mainController");
const express= require("express");
const router = express.Router() 

router.get("/", mainControllers.index);
router.get("/search", mainControllers.search);

module.exports = router