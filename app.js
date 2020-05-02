'use strict'
// Paquetes para las peticiones HTTPS
let express = require('express'); // Paquete para peticiones HTTPS
let bodyParser =require('body-parser'); // paquete que parsea los objetos en formato JSON
const app = express(); // Importación del metodo express para poder realizar las peticiones al servidor
//Conversión de objetos a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// Ruta que carga el controlador exerciseController ubicado en  ./controllers/exerciseController
let exercise_routes =require('./routes/exercise'); 
//Ruta base middleware
app.use('/exercise',exercise_routes);

module.exports=app; // exportación de exprees