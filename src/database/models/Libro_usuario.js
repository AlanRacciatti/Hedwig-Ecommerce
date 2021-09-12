function libros_usuarioData(sequelize, DataTypes) {
    
    let alias = "libros_usuario";
    
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
        update_at: { type: DataTypes.DATE },
        usuario_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        libro_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },  
    }

    let config = { timestamps: false }

    const users = sequelize.define(alias,cols,config)

    return users;
}

module.exports = libros_usuarioData;
