console.clear()

const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const controladorUsers = {

    login: (req, res) => {
        res.render("./users/login", {data: {session: req.session}});
    },

    loginAccount: (req,res) => {
        
        let resultadoValidacion = validationResult(req)
        
        console.log(resultadoValidacion)
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

                let passwordCorrecta = bcrypt.compareSync(passwordRecibida, usuarioEncontrado.contraseña);

                if (!passwordCorrecta) {
                    res.send("Credenciales inválidas")
                } else {
        
                    if (Boolean(recordarUsuario)) {
                        req.session.cookie.maxAge = 1000 * 60 * 60 * 24 //Esto equivale a un día en milisegundos
                    }
        
                    req.session.usuarioLogueado = true

                    db.usuarios.findByPk(usuarioEncontrado.id)
                    .then(usuario => {
                        req.session.admin = usuario.admin
                        res.redirect('/')
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
        console.log(resultadoValidacion)


        if (resultadoValidacion.errors.length <= 0) {
            
            let passwordHasheada = bcrypt.hashSync(req.body.password, 10);
    
            let nombreImagen = req.file.filename
            
            // Hora para los timestamps
            let horaActual = new Date().toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '')     // delete the dot and everything after
            
            let usuarioNuevo = {
                created_at: horaActual,
                updated_at: horaActual,
                email: req.body.email,
                nombre: req.body.userName,
                imagen: nombreImagen,
                fecha_nacimiento: req.body.fechaNacimiento,
                contraseña: passwordHasheada,
                admin: 0
            }
    
            db.usuarios.create(usuarioNuevo)
            
            res.redirect('/users/login')

        } else {
            res.render("./users/login", {data: {session: req.session, errores: resultadoValidacion.errors}})
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
    }

}

module.exports = controladorUsers;