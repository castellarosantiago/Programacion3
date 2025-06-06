const {Router} = require('express');
const {getAllPacientes, crearPaciente, modificarPaciente, borrarPaciente} = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware,  getAllPacientes);
//rutaPacientes.post('/login', login)
rutaPacientes.post('/',verifyTokenMiddleware, crearPaciente);
rutaPacientes.put('/:id',verifyTokenMiddleware, modificarPaciente);

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


DIFERENCIA CON LA CLINICA:

El paciente accede solo a los _id propios, 
y a los _idTurnos que pertenecen a su _id
*/

module.exports = rutaPacientes;