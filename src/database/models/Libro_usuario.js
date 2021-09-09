function libros_usuarioData(sequelize, DataTypes) {
    alias = "libros_usuario";
    cols = {
        id: {type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false},
        created_at: {type: DataTypes.DATE,
            allowNull: false},
        update_at: {type: DataTypes.DATE},
        usuario_fk: {type: Datatypes.INTEGER,
            allowNull: false},
        libro_fk: {type: Datatypes.INTEGER,
            allowNull: false},  
    }

const users = sequelize.define(alias,cols)

return users;
}

module.exports = libros_usuarioData;
