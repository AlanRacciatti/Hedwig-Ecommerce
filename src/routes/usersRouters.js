const controladorUsers = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

router.get("/register", controladorUsers.register);

router.get("/login", controladorUsers.login);

module.exports = router;