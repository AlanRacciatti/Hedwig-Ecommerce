const db = require('../database/models');
const { Op } = require('sequelize');

const controladorMain = {
    index: (req, res) => {
        db.libros.findAll()
        .then(resultado => {
            res.render("./products/index", {data: {products: resultado, session: req.session}})
        })
      
    },
    search: (req, res) => {

        let { search } = req.query

            db.libros.findAll({

                where: {
                    [Op.or]: {
                        titulo: {
                            [Op.like]: `%${search}%`
                        },
                        descripcion: {
                            [Op.like]: `%${search}%`
                        }   
                    }
                }
                
            })
            .then(resultado => res.render("./products/index", {data: {products: resultado, session: req.session}}))

    }
}

module.exports = controladorMain;