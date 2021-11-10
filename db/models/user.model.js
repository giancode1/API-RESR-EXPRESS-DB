const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users'; //nombre tabla

//Este schema define la estructura de la base de datos
const UserSchema = {
  id: {
    allowNull: false,  //no permitir nulo
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,  //campo unico
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: { //camelCase en JS
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at', //con este formato en la tabla
    defaultValue: Sequelize.NOW //momento en que se inserto
    //todo este campo es automatico
  }
}

class User extends Model {
  //métodos estáticos:
  //yo no necesito una declaracion para acceder a los métodos
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'  //como la va a encontrar
    }); 
  }
  //cuando hacemos un hasOne, recordemos que la relacion esta
  //del lado del customer
  static config(sequelize) {
    return {
      sequelize,   
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false //campos por defecto deshabilitados
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }