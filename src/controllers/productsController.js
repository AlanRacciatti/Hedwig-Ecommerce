const { EDESTADDRREQ } = require("constants");
const { resolveAny } = require("dns");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const db = require('../database/models');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorProductos = {

    carrito: (req, res) => {
        res.render("./products/carrito", {data: {session:req.session}});
    },

    agregarProducto: (req,res) => {
        res.render("./products/create", {data: {session:req.session}});
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

        res.render('./products/edit',{data: {productoaEditar: productoEncontrado, session: req.session}});
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

        // Hora para los timestamps
        let horaActual = new Date().toISOString().
        replace(/T/, ' ').      // replace T with a space
        replace(/\..+/, '')     // delete the dot and everything after

        db.libros.update({
            updated_at: horaActual,
            titulo: req.body.title,
            valoracion: req.body.rating,
            precio: req.body.price,
            oferta: req.body.offer,
            descripcion: req.body.description,
            cantidad_paginas: req.body.pagsLength,
            editorial: req.body.editorial,
        },
        {
            where: {id: id}
        })

		res.redirect('/');
	},

    detalles: (req, res) => {
        let {id} = req.params;

        db.libros.findByPk(id, {
            include: [
                {association: "autor"},
                {association: "genero"}
            ]
        })
        .then(libro => {
            res.render('./products/detalles',{data: {productoDetalle: libro, session: req.session}})
        })

    },

    destroy: (req, res) => {

		let id = req.params.id;
		let ProductoEncontrado;

		for (let producto of products){
			if (producto.id == id){
			    ProductoEncontrado=producto;
			}
		}

		fs.unlinkSync(path.join(__dirname, '../../public/img/products/', ProductoEncontrado.image));

        db.libros.update({ 
            eliminado: 1
        },
        {
            where: { id: id } 
        })

		res.redirect('/');

	}
}

module.exports = controladorProductos;