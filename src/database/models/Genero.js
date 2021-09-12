function generosData(sequelize, DataTypes) {

    let alias = "generos";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: { type: DataTypes.DATE },
        nombre: {
            type: DataTypes.STRING(500),
            allowNull: false
        }   
    }

    let config = { timestamps: false }

    const genero = sequelize.define(alias,cols,config);

    genero.associate = (modelos) => {

        genero.hasMany(modelos.libros, {
            as: "genero",
            foreignKey: "genero_fk"
        });
        
    }


    return genero;
    
}

module.exports = generosData;
