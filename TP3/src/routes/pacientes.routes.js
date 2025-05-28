const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/login',pacientesController.login)
rutaPacientes.post('/',verifyTokenMiddleware,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);

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