const { Router } = require("express");
const { getAllPacientes, getAllTurnos, getPacientesConTurnos, reservarTurnoDisponible, crearTurnoDisponible } = require("../controllers/API/clinica.controller.js")
const  { verifyTokenMiddleware }  = require('../middlewares/verifyToken.middleware.js');
const {validarTurno} = require('../schemas/joiTurnos.middleware'); //??????????

const routerClinica = Router();

routerClinica.get("/pacientes", verifyTokenMiddleware, getAllPacientes);
routerClinica.get("/turnos", verifyTokenMiddleware, getAllTurnos);
routerClinica.get("/pacientes-c-turnos", verifyTokenMiddleware, getPacientesConTurnos);
routerClinica.post("/turnos", verifyTokenMiddleware, validarTurno , crearTurnoDisponible);
routerClinica.post("/turnos-disponibles", verifyTokenMiddleware, validarTurno, reservarTurnoDisponible)

module.exports = routerClinica;