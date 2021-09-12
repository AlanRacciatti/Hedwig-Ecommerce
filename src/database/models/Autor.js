function autoresData(sequelize, DataTypes) {

    let alias = "autores";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: { type: DataTypes.DATE },
        updated_at: { type: DataTypes.DATE },
        nombre: {
            type: DataTypes.STRING(500),
            allowNull: false
        }   

    }

    let config = { timestamps: false }

    const autor = sequelize.define(alias,cols,config);

    autor.associate = (modelos) => {
        autor.hasMany(modelos.libros, {
            as: "autores",
            foreignKey: "autor_fk"
        });
    }

    return autor;

}

module.exports = autoresData;
