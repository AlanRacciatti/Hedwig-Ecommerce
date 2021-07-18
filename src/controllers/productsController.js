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
        res.render("./products/agregarProducto");
    },

    editarProducto: (req,res) => {
        res.render("./products/editarProducto");
    }
}

module.exports = controladorProductos;