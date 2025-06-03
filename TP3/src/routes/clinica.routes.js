const { Router } = require("express");
const clinicaController = require("../src/controllers/API/clinica.controller.js")
const  { verifyTokenMiddleware }  = require('../middlewares/verifyToken.middleware.js');

const rutaClinica = Router();
rutaClinica.get("/pacientes", verifyTokenMiddleware, clinicaController.getAllPacientes);
rutaClinica.get("/turnos", verifyTokenMiddleware, clinicaController.getAllTurnos);
rutaClinica.get("/pacientes-c-turnos", verifyTokenMiddleware, clinicaController.getPacientesConTurnos);
rutaClinica.post("/turnos-disponibles", verifyTokenMiddleware, clinicaController.reservarTurnosDisponibles);
//rutaClinica.get("/", verifyTokenMiddleware, clinicaController)