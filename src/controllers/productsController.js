const controladorProductos = {
    index: (req, res) => {
        res.render("./products/index");
    },

    detalles: (req, res) => {
        res.render("./products/detalles");
    },

    carrito: (req, res) => {
        res.render("./products/carrito");
    }
}

module.exports = controladorProductos;