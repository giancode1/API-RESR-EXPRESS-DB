//este archivo de encargar de enviar la conexión hacia los modelos
const { User, UserSchema } = require('./user.model');
//mas modelos

function setupModels(sequelize) { //configuracion de los modelos
  User.init(UserSchema, User.config(sequelize));
  //mas modelos
}

module.exports = setupModels;