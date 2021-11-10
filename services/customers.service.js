const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {

  constructor() {}

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user'] //Customer tambien puede tener relaciones a otras tablas
    });
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    //--codigo1--  mas peque q el codigo2//  //funca gracias a la asociaion user
    const newCustomer = await models.User.create(data, {  //el usuario esta dentro de data
      include: ['user']
    }); 
    //--codigo1--//
  
    //--codigo2-- asignacion manual//
    // const newUser = await models.User.create(data.user); //creo 1ro el usuario y la informacion esta en data.user
    // const newCustomer = await models.Customer.create({
    //   ...data,
    //   userId: newUser.id
    // });
    //--codigo2--//

    return newCustomer;  //usado en todos los codigos
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CustomerService;