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

    const users = sequelize.define(alias,cols,config)

    return users;
    
}

module.exports = generosData;
