const {Router} = require('express');
const{getTurnosByPaciente, cancelarTurno,crearNuevoTurno} = require('../controllers/API/turnos.controller.js');
const{verifyTokenMiddleware} = require('../middlewares/verifyToken.middleware.js');
const {validarTurno} = require('../schemas/joiTurnos.middleware');
const router = Router();


//turno por id de paciente
router.get('/:idPaciente', getTurnosByPaciente);

//cancelar turno
router.delete('/:idTurno', cancelarTurno);

//sacar turno con auth
router.post('/', verifyTokenMiddleware, validarTurno, crearNuevoTurno);

module.exports = router;