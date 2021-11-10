const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer(); //lo dejo solo cuando quiera actualizar
//cuando quiera crear me vana  enviar la inf completa, email, pass
const email = Joi.string().email();
const password =  Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  //userId: userId.required()  //en vez de esto lo de abajo
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

//en la parte de actualización son opcionales.
const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };