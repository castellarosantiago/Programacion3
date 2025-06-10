const { Router } = require('express');
const clinicaController = require('../controllers/API/clinica.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const router = Router();

router.get('/pacientes', verifyTokenMiddleware, clinicaController.vistaPacientes);
router.get('/pacientes/nuevo', verifyTokenMiddleware, clinicaController.nuevoPaciente);
router.post('/pacientes/nuevo', verifyTokenMiddleware, clinicaController.crearPaciente);

router.get('/turnos', verifyTokenMiddleware, clinicaController.vistaTurnos);
router.post('/turnos/asignar/:id', verifyTokenMiddleware, clinicaController.asignarTurno);
router.post('/turnos/cancelar/:id', verifyTokenMiddleware, clinicaController.cancelarTurno);

module.exports = router;