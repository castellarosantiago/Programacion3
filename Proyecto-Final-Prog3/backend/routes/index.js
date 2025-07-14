const express = require('express');
const router = express.Router();

// Importar rutas
const preferencesRoutes = require('./preferences.js');

// Rutas de tareas
router.use('/preferences', preferencesRoutes);

module.exports = router;
