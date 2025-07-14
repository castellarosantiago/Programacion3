const express = require('express');
const router = express.Router();

// Importar rutas
const preferencesRoutes = require('./preferencesRoutes.js');
const authRoutes = require('authRoutes.js')
// Rutas de tareas
router.use('/preferences', preferencesRoutes);
router.use('/auth', authRoutes)

module.exports = router;
