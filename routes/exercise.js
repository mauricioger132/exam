'use strict'

let express = require('express');// Package para peticiones HTTP
// Carga del controlador exercise y con ello poder acceder a sus metódos
let ExerciseController = require('../controllers/exerciseController'); 
const router =express.Router(); // Importación del metodo express para poder realizar las peticiones al servidor

router.get('/exercisethree',ExerciseController.exerciseExample);  //Ruta definida en la url del navegador

module.exports = router; // exportación de la ruta