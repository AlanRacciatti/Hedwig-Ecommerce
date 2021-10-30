console.clear()

const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require('express-validator');

let horaActual = new Date().toISOString().
replace(/T/, ' ').      // replace T with a space
replace(/\..+/, '')     // delete the dot and everything after

const controladorUsers = {

    login: (req, res) => {
        res.render("./users/login", {data: {session: req.session}});
    },

    logOut: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    },

    loginAccount: (req,res) => {
        
        let resultadoValidacion = validationResult(req)
        
        if (resultadoValidacion.errors.length <= 0) {

            let emailRecibido = req.body.email;
            let passwordRecibida = req.body.password;
            let recordarUsuario = req.body.recordarUsuario;
            
            let usuarioEncontrado 
            
            db.usuarios.findAll()
            .then(usuarios => {
                usuarios.forEach(usuario => {
                    if (usuario.email == emailRecibido) {
                        usuarioEncontrado = usuario;
                    }
                })

                if(usuarioEncontrado == undefined){
                    let error = [{
                        value: "",
                        msg: "Email inválido",
                    }]
                    res.render("./users/login", {data: {session: req.session, errores: error}})
                }

                let passwordCorrecta = bcrypt.compareSync(passwordRecibida, usuarioEncontrado.contraseña);

                if (!passwordCorrecta) {
                    let error = [{
                        value: "",
                        msg: "Contraseña incorrecta",
                    }]
                    res.render("./users/login", {data: {session: req.session, errores: error}})
                } else {
        
                    if (Boolean(recordarUsuario)) {
                        req.session.cookie.maxAge = 1000 * 60 * 60 * 24 //Esto equivale a un día en milisegundos
                    }
        
                    req.session.usuarioLogueado = true

                    db.usuarios.findByPk(usuarioEncontrado.id)
                    .then(usuario => {
                        req.session.idUsuario = usuario.id
                        req.session.admin = usuario.admin

                        db.libros_usuario.findAll({where: {usuario_fk: req.session.idUsuario, eliminado: null}})
                        .then(librosUsuario => {
                            req.session.librosUsuario = librosUsuario
                            res.redirect('/products/carrito')
                        })
                    })

                }

            })

        } else {
            
            res.render("./users/login", {data: {session: req.session, errores: resultadoValidacion.errors}})
        }

    },

    register: (req, res) => {
        res.render("./users/register", {data: {session: req.session}});
    },

    createAccount: (req, res) => {

        let resultadoValidacion = validationResult(req)


        if (resultadoValidacion.errors.length <= 0) {
            
            let passwordHasheada = bcrypt.hashSync(req.body.password, 10);
            
            // Hora para los timestamps
            let horaActual = new Date().toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '')     // delete the dot and everything after
            
            let usuarioNuevo = {
                created_at: horaActual,
                updated_at: horaActual,
                email: req.body.email,
                nombre: req.body.userName,
                imagen: req.file.path,
                fecha_nacimiento: req.body.fechaNacimiento,
                contraseña: passwordHasheada,
                admin: 0
            }
    
            db.usuarios.create(usuarioNuevo)
            
            res.redirect('/users/login')

        } else {
            res.render("./users/register", {data: {session: req.session, errores: resultadoValidacion.errors}})
        }


    },

    panelUsuarios: (req, res) => {
        if (req.session.admin == 2) {
            db.usuarios.findAll()
            .then(usuarios => {
                res.render("./users/cuentaAdmin", {data: {session: req.session, usuarios: usuarios}});
            })
        } else {
            res.redirect('./users/login')
        }
    },

    usuariosAdmin: (req, res) => {
        
        let {admin} = req.body
        let {id} = req.params
        db.usuarios.update({
            admin: admin
        },
        {
            where: {id: id}
        })
        res.redirect('/users/panel')
    },

    agregarGenero: (req, res) => {
        db.generos.create({
            created_at: horaActual,
            updated_at: horaActual,
            nombre: req.body.genero
        })
        res.redirect('/users/panel');
    },

    agregarAutor: (req, res) => {
        db.autores.create({
        created_at: horaActual,
        updated_at: horaActual,
        nombre: req.body.autor
    })
    res.redirect('/users/panel');
    },

    infoUsuarios: (req, res) => {
        db.usuarios.findAll()
        .then(usuarios => {

            let cantidadUsuarios = usuarios.length

            let data = {
                count: {
                    cantidadUsuarios: cantidadUsuarios
                },
                users: usuarios
            }

            res.json(data)
        })
    },
    infoUsuarioParticular: (req, res) => {
        let id = req.params.id
        db.usuarios.findByPk(id)
        .then(usuario =>{
            delete usuario.dataValues.contraseña
            res.json(usuario) 
        })
    },

    ultimoUsuario: (req, res) => {
        db.usuarios.findAll({
            order: [["created_at", "DESC"] ],
            limit: 1
        })
        .then(usuario => res.json(usuario))
    }

}

module.exports = controladorUsers;