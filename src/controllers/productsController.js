const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorProductos = {
    index: (req, res) => {
        res.render("./products/index");
    },

    detalles: (req, res) => {
        res.render("./products/detalles");
    },

    carrito: (req, res) => {
        res.render("./products/carrito");
    },

    agregarProducto: (req,res) => {
        res.render("./products/create");
    },

    store: (req,res) => {
        let idNuevo= 0
        for (let p of products){
            if (idNuevo < p.id){
                idNuevo = p.id
            }
        }
        idNuevo++
        let nombreImagen = req.file.filename
        let productoNuevo = {
            id: idNuevo,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            offer: req.body.offer,
            rating: req.body.rating,
            gender: req.body.gender,
            author: req.body.author,
            image: nombreImagen,
            pagsLength: req.body.pagsLength,
            editorial:req.body.editorial,

        }
        products.push(productoNuevo)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "))
        res.redirect("/")
    },

    editarProducto: (req,res) => {
        res.render("./products/editarProducto");
    }
}

module.exports = controladorProductos;