const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const {Op} = require("sequelize")
let horaActual = new Date().toISOString().
replace(/T/, ' ').      // replace T with a space
replace(/\..+/, '')     // delete the dot and everything after

let { validationResult } = require('express-validator');

const controladorProductos = {

    carrito: (req, res) => {

        if (!req.session.usuarioLogueado) {
            let error = [{
                value: "",
                msg: "Debes iniciar sesión para añadir productos a tu carrito",
            }]
            res.render("./users/login", {data: {session: req.session, errores: error}})
        } else {
            db.libros_usuario.findAll({where: {usuario_fk : req.session.idUsuario}})
            .then(librosUsuario => {

                db.libros.findAll({include: [
                    {association: "autor"},
                    {association: "genero"}
                ]})
                .then(libros => {
                    let librosFiltrados = []
                    for (let libro of libros) {
                        for (libroUsuario of librosUsuario) {
                            console.log(`Comparando ${libro.id} con ${libroUsuario.libro_fk}`)
                            if (libroUsuario.libro_fk == libro.id) {
                                console.log("Encontré!")
                                librosFiltrados.push(libro)
                            }
                        }
                    }
                    res.render("products/carrito", {data: {session: req.session, librosUsuario: librosFiltrados}})
                })

                // res.render("products/carrito", {data: {session: req.session, librosUsuario: librosUsuario}})
            })
        }

    },

    añadirAlCarrito: (req, res) => {

        if (!req.session.usuarioLogueado) {

            let error = [{
                value: "",
                msg: "Debes iniciar sesión para añadir productos a tu carrito",
            }]

            res.render("./users/login", {data: {session: req.session, errores: error}})
            
        } else {

            let idProducto = req.params.id
            let idUsuario = req.session.idUsuario

            db.libros_usuario.findAll({where: {usuario_fk: idUsuario}})
            .then(librosUsuario => {


                let contadorOrdenes = 0
                
                for (let orden of librosUsuario) {
                    contadorOrdenes++

                    if (orden.libro_fk == idProducto) {

                        let nuevaCantidadProductos = orden.cantidad_productos + 1
                        let nuevoMonto = orden.monto/orden.cantidad_productos * nuevaCantidadProductos 

                        db.libros_usuario.update({
                            cantidad_productos : nuevaCantidadProductos,
                            monto: nuevoMonto
                        },
                        { 
                            where: {
                                libro_fk: idProducto,
                                usuario_fk: idUsuario
                            } 
                        })

                        req.session.librosUsuario = librosUsuario

                        return res.redirect('/products/carrito')        
                    } 
                }
    
                if (contadorOrdenes >= librosUsuario.length) {
                    
                    db.libros.findOne({where: {id: idProducto}})
                    .then(libro => {

                        let nuevaOrden = {
                            created_at: horaActual,
                            updated_at: horaActual,
                            usuario_fk: idUsuario,
                            libro_fk: idProducto,
                            cantidad_productos: 1,
                            precio_producto: libro.precio,
                            monto: libro.precio
                        }

                        db.libros_usuario.create(nuevaOrden)

                        req.session.librosUsuario = librosUsuario

                        return res.redirect('/products/carrito')
                        
                    })
                }
            })
        }
    },

    agregarProducto: (req,res) => {

        if (req.session.admin >= 1) {
            db.generos.findAll()
            .then(generos => {
                db.autores.findAll()
                .then(autores => {
                    res.render("./products/create", {data: {generos: generos, autores: autores, session:req.session}})
                })
            })
        }
        else {
            res.redirect("/")
        }
            
        },


    store: (req,res) => {

        let resultadoValidacion = validationResult(req);
        console.log(resultadoValidacion)

        if (resultadoValidacion.errors.length <= 0) {
            
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

        } else {
            db.generos.findAll()
            .then(generos => {
                db.autores.findAll()
                .then(autores => {
                    res.render("./products/create", {data: {generos: generos, autores: autores, session:req.session, errores: resultadoValidacion.errors}})
                })
            })
        }


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

        let resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length <= 0) {
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
        } else {
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
                        res.render('./products/edit', {data: {autores: autores, generos: generos, productoaEditar: libro, session: req.session, errores: resultadoValidacion.errors}})
                    })
                }) 
            })
        }

   
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


	},

    ofertas:(req,res) =>{
        db.libros.findAll({
            where:{ [Op.not]: [{oferta:[0]}]}
        })
        .then(libros => { 
            res.render("./products/ofertas", {data: {products: libros, session: req.session}})
        })
    }
}

module.exports = controladorProductos;