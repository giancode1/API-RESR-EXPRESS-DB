const { config } = require('../config/config');

//conexión
const USER =  encodeURIComponent(config.dbUser);
const PASSWORD =  encodeURIComponent(config.dbPassword);
const URI =  `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  //va a tener varios ambientes
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}

