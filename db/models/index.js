//este archivo de encargar de enviar la conexión hacia los modelos
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
//mas modelos

function setupModels(sequelize) { //configuracion de los modelos
  //inicialización:
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  //mas modelos

  //ejecutar el metodo:
  Customer.associate(sequelize.models);
}

module.exports = setupModels;