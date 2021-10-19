const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

const validacionesLogin = require('../middlewares/validations/validationsLogin')
const validacionesRegister = require('../middlewares/validations/validationsRegister')

//**** Multer ****
const uploadFile = require('../middlewares/usersMulter')

router.get("/register", controladorUsers.register);
router.post("/register", uploadFile.single("image") ,validacionesRegister, controladorUsers.createAccount);

router.get("/login", controladorUsers.login);
router.post('/login', validacionesLogin, controladorUsers.loginAccount)

router.get('/logout', controladorUsers.logOut)

router.get("/panel", controladorUsers.panelUsuarios)
router.put("/panel/:id", controladorUsers.usuariosAdmin)

// Api

router.get('/api/v1/info', controladorUsers.infoUsuarios)

router.get("/api/v1/info/:id" , controladorUsers.infoUsuarioParticular)
module.exports = router;
