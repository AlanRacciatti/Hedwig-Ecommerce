function generosData(sequelize, DataTypes) {
    alias = "generos";
    cols = {
        id: {type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        created_at: {type: DataTypes.DATE,
            allowNull: false},
        update_at: {type: DataTypes.DATE},
        nombre: {type: Datatypes.STRING(500),
            allowNull: false}   
    }

const users = sequelize.define(alias,cols)

return users;
}

module.exports = generosData;
