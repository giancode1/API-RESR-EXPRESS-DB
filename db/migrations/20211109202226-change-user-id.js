//mejor desde el principio haberle dicho que es unique, si lo hice
//este es un caso hipotetico en el que no lo hubiera hecho y la solución

//si tengo el problema aplica esto, el changeColumn
//a tener en cuenta antes de correr la migración
//si ya tienes campos en la tabla donde esta repetido no deja correr la migración porque rompe
//debes ir manualmente a la db en pgAdmin y arreglar esos indices
//o borrar toda la inf
//o correr otro tipo de migración mas complicada

'use strict';
const { DataTypes } = require('sequelize');

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    //await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id'); //tabla,columna
    
    //esta vez lo hacemos a mano
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    }); 
  },

  down: async (queryInterface) => {
     // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};


