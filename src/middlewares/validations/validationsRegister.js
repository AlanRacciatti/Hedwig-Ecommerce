const { check } = require('express-validator')
module.exports = [

    check("email")
        .isEmail()
        .withMessage("Ingrese un email válido"),
    check("userName")
        .notEmpty()
        .withMessage("Ingrese su nombre"),
    check("image")
        .notEmpty()
        .withMessage("Ingrese una imagen de perfil"),
    check("password")
        .notEmpty()
        .withMessage("Ingrese una contraseña"),
    check("confirm-password")
        .notEmpty()
        .withMessage("Confirme su contraseña")

]