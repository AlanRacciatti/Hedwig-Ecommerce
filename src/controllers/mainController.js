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
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // res.render("./products/index", {data: {products: products, session: req.session}});
      
    },
}

module.exports = controladorMain;