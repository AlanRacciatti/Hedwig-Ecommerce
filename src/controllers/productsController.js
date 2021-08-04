const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controladorProductos = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("./products/index", {products: products});
    },

    products: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("./products/products", {products: products});
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

    edit: (req, res) => {
        let {id} = req.params;
        let productoEncontrado;

        for (let p of products) {
            if (p.id == id){
                productoEncontrado = p;
            }
        }

        res.render('./products/edit',{productoaEditar: productoEncontrado});
    },

    update: (req, res) => {
		
		let id = req.params.id;

		for (let s of products){
			if (id==s.id){
                s.title = req.body.title;
                s.description = req.body.description;
                s.price = req.body.price;
                s.offer = req.body.offer;
                s.valoration = req.body.valoration;
                s.gender = req.body.gender;
                s.author = req.body.author;
                s.pagsLength = req.body.pagsLength;
                s.editorial = req.body.editorial;
				break;
			}
		}


        console.log(`Updated product with id ${id}`);

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');
	},

    detalles: (req, res) => {
        let {id} = req.params;
        let productoEncontrado;

        for (let p of products) {
            if (p.id == id){
                productoEncontrado = p;
            }
        }

        res.render('./products/detalles',{productoDetalle: productoEncontrado});
    }
}

module.exports = controladorProductos;