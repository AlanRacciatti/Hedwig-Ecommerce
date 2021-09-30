const { check } = require('express-validator')
module.exports = [

    check('email')
        .isEmail()
        .withMessage("Ingrese un email válido"),
    check("password")
        .notEmpty()
        .withMessage("Escriba una contraseña")

]