const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

const uploadFile = require('../middlewares/multerMiddleware')
const uploadFile = multer({ storage: configuracionImagen });

router.get("/register", controladorUsers.register);
const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware')

router.get("/register", controladorUsers.register);
router.post("/register", uploadFile.single("image") ,controladorUsers.createAccount);

router.get("/login", controladorUsers.login);

module.exports = router;


router.get("/login", controladorUsers.login);

module.exports = router;