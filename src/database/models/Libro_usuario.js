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
        updated_at: { type: DataTypes.DATE },
        usuario_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        libro_fk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad_productos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio_producto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monto: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = { timestamps: false }

    const libros_usuario = sequelize.define(alias,cols,config)

    return libros_usuario;
}

module.exports = libros_usuarioData;