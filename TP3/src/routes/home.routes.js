
const {Router} = require('express');
const {home} = require('../controllers/home/home.controller.js')
const rutaHome = Router();
rutaHome.get('/', home);

const { renderizarTurnos } = require('../controllers/local/turnos.controller.js');
rutaHome.get('/turnos', renderizarTurnos);
//Otras rutas CRUD
/*
Consultar turnos por identificador:
GET /api/v1/turnos/:idPaciente

Cancelar un turno:
DELETE /api/v1/turnos/:idTurno

Modificar un Turno:
PUT /api/v1/turnos/:idTurno

Cargar un nuevo turno:
POST /api/v1/turnos

LA CLINICA ACCEDE Y MANEJA TODOS LOS _ID
*/

module.exports = rutaHome;