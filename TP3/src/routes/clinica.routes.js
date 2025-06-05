const { Router } = require("express");
const {getAllPacientes, getAllTurnos, getPacientesConTurnos, borrarPacientes} = require("../src/controllers/API/clinica.controller.js")
const  { verifyTokenMiddleware }  = require('../middlewares/verifyToken.middleware.js');

const rutaClinica = Router();
rutaClinica.get("/pacientes", verifyTokenMiddleware, getAllPacientes);
rutaClinica.get("/turnos", verifyTokenMiddleware, getAllTurnos);
rutaClinica.get("/pacientes-c-turnos", verifyTokenMiddleware, getPacientesConTurnos);
rutaClinica.post("/turnos-disponibles", verifyTokenMiddleware, reservarTurnosDisponibles);
//rutaClinica.get("/", verifyTokenMiddleware, clinicaController)