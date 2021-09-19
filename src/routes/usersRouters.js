const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

//**** Multer ****
const uploadFile = require('../middlewares/usersMulter')

router.get("/register", controladorUsers.register);
router.post("/register", uploadFile.single("image") ,controladorUsers.createAccount);

router.get("/login", controladorUsers.login);
router.post('/login', controladorUsers.loginAccount)

router.get("/panel", controladorUsers.panelUsuarios)
router.put("/panel/:id", controladorUsers.usuariosAdmin)

module.exports = router;
