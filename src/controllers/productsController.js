const controladorProductos = {
    index: (req, res) => {
        res.render("/products/index");
    },

    detalles: (req, res) => {
        res.render("detalles");
    },

    carrito: (req, res) => {
        res.render("carrito");
    }
}

module.exports = controladorProductos;