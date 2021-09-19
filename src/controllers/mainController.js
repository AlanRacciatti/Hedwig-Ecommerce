const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const db = require('../database/models');

const controladorMain = {
    index: (req, res) => {
        db.libros.findAll()
        .then(resultado => {
            res.render("./products/index", {data: {products: resultado, session: req.session}})
        })
      
    },
}

module.exports = controladorMain;