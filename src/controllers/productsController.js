const fs = require("fs");
const path = require("path");
const db = require('../database/models');
let horaActual = new Date().toISOString().
replace(/T/, ' ').      // replace T with a space
replace(/\..+/, '')     // delete the dot and everything after

const controladorProductos = {

    carrito: (req, res) => {
        res.render("./products/carrito", {data: {session:req.session}});
    },

    agregarProducto: (req,res) => {
        db.generos.findAll()
        .then(generos => {
            db.autores.findAll()
            .then(autores => {
                res.render("./products/create", {data: {generos: generos, autores: autores, session:req.session}})
            })
        })
    },

    store: (req,res) => {

        db.autores.findOne({ where: {nombre: req.body.author} })
        .then(autores => {
            
            let nombreImagen = req.file.filename
            let autor = autores.id

            db.generos.findOne({ where: {nombre: req.body.gender} })
            .then(generos => {

                let genero = generos.id
                
                let productoNuevo = {
                    created_at: horaActual,
                    updated_at: horaActual,
                    imagen: nombreImagen,
                    titulo: req.body.title,
                    valoracion: req.body.rating,
                    precio: req.body.price,
                    oferta: req.body.offer,
                    descripcion: req.body.description,
                    cantidad_paginas: req.body.pagsLength,
                    editorial:req.body.editorial,
                    stock: req.body.stock,
                    eliminado: 0,
                    genero_fk: genero,
                    autor_fk: autor,
                }
        
                db.libros.create(productoNuevo)
        
                res.redirect("/")

            })

        })

    },

    edit: (req, res) => {
        let {id} = req.params;
        db.libros.findByPk(id, {include: [
            {association: "autor"},
            {association: "genero"}
        ]})
        .then(libro => {   
            db.autores.findAll()
            .then(autores => {
                db.generos.findAll()
                .then(generos => {
                    res.render('./products/edit', {data: {autores: autores, generos: generos, productoaEditar: libro, session: req.session}})
                })
            }) 
        })

    },

    update: (req, res) => {
	    // Hora para los timestamps
        let { id } = req.params

    

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

        db.libros.findByPk(id)
        .then(libro => {
            fs.unlinkSync(path.join(__dirname, '../../public/img/products/', libro.imagen));
        })


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