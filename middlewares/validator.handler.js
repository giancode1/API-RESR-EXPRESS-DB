const boom = require('@hapi/boom');

//validatorHandler retorna una función
function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property];
    // req.body   //si es un post la inf vienen en body
    // req.params //si es un get
    // req.query  //en la query
    // req[property] : de forma dinamica
    const { error } = schema.validate(data, { abortEarly: false });
    if(error){
      next(boom.badRequest(error)); //envia a los middlewares de tipo error
    }
    next();   //si no hay error siga
  }
}

module.exports = validatorHandler;
