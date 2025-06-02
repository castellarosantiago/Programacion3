const {Router} = require('express');
const{getTurnosByPaciente, deleteTurno,createTurno} = require('../controllers/API/turnos.controller.js');
const{vertifyTokenMiddleware} = require('../middlewares/verifyToken.middleware.js');
const router = Router();


//turno por id de paciente
router.get('/:idPaciente', getTurnosByPaciente);

//cancelar turno
router.delete('/:idTurno', deleteTurno);

//sacar turno con auth
router.post('/', verifyTokenMiddleware, validarTurno, createTurno);

module.exports = router;