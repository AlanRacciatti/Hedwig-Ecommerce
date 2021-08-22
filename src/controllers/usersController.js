const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcrypt')

const controladorUsers = {

    login: (req, res) => {
        res.render("./users/login");
    },

    register: (req, res) => {
        res.render("./users/register");
    },

    createAccount: (req, res) => {

        let idNuevo= 0
        let passwordHasheada = bcrypt.hashSync(req.body.password, 10);

        for (let u of users){
            if (idNuevo < p.id){
                idNuevo = p.id
            }
        }

        idNuevo++

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
        res.redirect("/")

    }

}

module.exports = controladorUsers;