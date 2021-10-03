const { check } = require('express-validator')
module.exports = [

    check("price")
        .isNumeric()
        .withMessage("Ingrese un precio"),

    check("title")
        .notEmpty()
        .withMessage("Ingrese un título"),

    check("description")
        .notEmpty()
        .withMessage("Ingrese una descripción"),

    check("pagsLength")
        .notEmpty()
        .withMessage("Ingrese una cantidad de páginas"),

    check("editorial")
        .notEmpty()
        .withMessage("Ingrese una editorial"),

    check("stock")
        .notEmpty()
        .withMessage("Ingrese un stock")
    
]

