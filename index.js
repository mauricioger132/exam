'use strict'
//Conexión al servidor local
let app =require('./app'); //importación de app donde se encuentra express
let port = process.env.PORT || 3977; // definición del puerto local

// Configuración del servidor local
app.listen(port,()=>{
    console.log("Servidor corriendo en http://localhost:"+port);
});