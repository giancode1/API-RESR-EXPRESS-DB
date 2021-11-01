const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

const whitelist = ['http://127.0.0.1:5500','https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true) //no hay error, el acceso esta permitido
    }else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

routerApi(app);

//middlewares, importante el orden
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log("My port: " + port); //no deberias tener console.log en produccion
});










