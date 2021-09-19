function librosData(sequelize, DataTypes){

    let alias = "libros"

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

        updated_at: {
            type: DataTypes.DATE
        },

        imagen: {
            type: DataTypes.STRING(100)
        },

        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        valoracion: {
            type: DataTypes.DECIMAL(20,1),
            allowNull: false
        },

        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        oferta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        cantidad_paginas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        editorial: {
            type: DataTypes.STRING(300),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        eliminado: {
          type: DataTypes.INTEGER,
          allowNull: false  
        },
        
        autor_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        genero_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }

    let config = { timestamps: false }

    const libro = sequelize.define(alias,cols,config);

    libro.associate = (modelos) => {

        libro.belongsTo(modelos.autores, {
            as: "autores",
            foreignKey: "autor_fk"
        });
        
        libro.belongsTo(modelos.generos, {
            as: "genero",
            foreignKey: "genero_fk"
        });
        
        libro.belongsToMany(modelos.usuarios, {

            as: "usuarios",
            through: "libros_usuario",
            foreignKey: "libro_fk",
            otherKey: "usuario_fk",
            timestamps: false
            
        })
        
    }

    return libro;

}

module.exports = librosData;