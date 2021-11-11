const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model')

const CUSTOMER_TABLE = 'customers';

const CustomerSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {   //foreign key
      model: USER_TABLE,
      key: 'id'
    },
    //reglas
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {

  static associate(models) {
    //asociasiones
    //aqui defino la relacion
    this.belongsTo(models.User, {as: 'user'}); //esta es una asociacion
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    }); 
    //ordenes de compra ligadas a un cliente
    //un cliente puede tener muchas ordenes de compra
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };