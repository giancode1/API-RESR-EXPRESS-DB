//este archivo de encargar de enviar la conexión hacia los modelos
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
//mas modelos
const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelize) { //configuracion de los modelos
  //inicialización:
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  //mas modelos
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  //ejecutar el metodo:
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;