const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorMain = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //res.render("./products/index", {products: products});
        res.send (req.session.recordarUsuario)
    },
}

module.exports = controladorMain;