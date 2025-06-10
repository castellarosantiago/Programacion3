const { Router } = require('express');
const pacientesViewsController = require('../controllers/pacientes.views.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const { joiPacientesRegister, joiPacientesLogin } = require('../schemas/joiPacientes.middleware.js');

const router = Router();

router.get('/login', pacientesViewsController.getLogin);
router.post('/login', joiPacientesLogin, pacientesViewsController.postLogin);
router.get('/register', pacientesViewsController.getRegister);
router.post('/register', joiPacientesRegister, pacientesViewsController.postRegister);

router.get('/turnos', verifyTokenMiddleware, pacientesViewsController.getTurnosDisponibles);
router.get('/mis-turnos', verifyTokenMiddleware, pacientesViewsController.getMisTurnos);
router.post('/turnos/asignar/:id', verifyTokenMiddleware, pacientesViewsController.asignarTurno);
router.post('/turnos/cancelar/:id', verifyTokenMiddleware, pacientesViewsController.cancelarTurno);

router.get('/logout', pacientesViewsController.logout);

module.exports = router;