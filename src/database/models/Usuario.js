function usuariosData (sequelize, DataTypes) {
    let alias = "usuarios"
    let cols = {
        id: {type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {type: DataTypes.DATE,
            allowNull: false},
        update_at: {type: Datatypes.DATE},
        nombre: {type: Datatypes.STRING(500),
            allowNull: false},
        apellido: {type: Datatypes.STRING(500),
            allowNull: false},
        imagen: {type: DataTypes.STRING(300)},
        email:{type: DataTypes.VARCHAR,
            allowNull: false},
        fecha_nacimiento: {type: DataTypes.DATEONLY,
            allowNull: false},
        contraseña: {type: DataTypes.VARCHAR,
            allowNull: false},
        admin: {type: DataTypes.INTEGER,
            allowNull: false}
    }
    
    const users = sequelize.define(alias,cols)
    
    return users;
    
    }
    
    module.exports = usuariosData;
    