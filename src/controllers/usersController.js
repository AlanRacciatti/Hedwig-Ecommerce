const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const controladorUsers = {

    login: (req, res) => {
        res.render("./users/login", {data: {session: req.session}});
    },
    loginAccount: (req,res) => {

        let emailRecibido = req.body.email 
        let passwordRecibida = req.body.password
        let recordarUsuario = req.body.recordarUsuario
        
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
                res.redirect('/')
            }

        })


    },
    register: (req, res) => {
        res.render("./users/register", {data: {session: req.session}});
    },

    createAccount: (req, res) => {

        let idNuevo= 0
        let passwordHasheada = bcrypt.hashSync(req.body.password, 10);

        for (let u of users){
            if (idNuevo < u.id){
                idNuevo = u.id
            }
        }

        idNuevo++

        console.log(req.file)
        let nombreImagen = req.file.filename

        let usuarioNuevo = {
            id: idNuevo,
            userName: req.body.userName,
            mail: req.body.email,
            password: passwordHasheada,
            image: nombreImagen,
            fechaNacimiento: req.body.fechaNacimiento,
        }

        users.push(usuarioNuevo)
        fs.writeFileSync(usersFilePath,JSON.stringify(users,null," "))
        res.send("<h1>Tu cuenta ha sido creada!</h1><a href='/users/login'>Iniciar sesión</a>")

    }

}

module.exports = controladorUsers;