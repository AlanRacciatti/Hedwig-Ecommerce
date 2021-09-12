function usuariosData (sequelize, DataTypes) {

    let alias = "usuarios"

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
        updated_at: { type:DataTypes.DATE },
        nombre: {
            type:DataTypes.STRING(500),
            allowNull: false
        },
        imagen: { type: DataTypes.STRING(300) },
        email:{
            type: DataTypes.STRING(300),
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        admin: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = { timestamps: false }
    
    const users = sequelize.define(alias,cols,config)
    
    return users;
    
    }
    
    module.exports = usuariosData;
    