const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

const validacionesLogin = require('../middlewares/validations/validationsLogin')
const validacionesRegister = require('../middlewares/validations/validationsRegister')

//**** Multer ****
const uploadFile = require('../middlewares/usersMulter')

router.get("/register", controladorUsers.register);
router.post("/register", validacionesRegister ,uploadFile.single("image") ,controladorUsers.createAccount);

router.get("/login", controladorUsers.login);
router.post('/login', validacionesLogin ,controladorUsers.loginAccount)

router.get("/panel", controladorUsers.panelUsuarios)
router.put("/panel/:id", controladorUsers.usuariosAdmin)

module.exports = router;
