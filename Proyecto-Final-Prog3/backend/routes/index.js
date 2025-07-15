const express = require('express');
const router = express.Router();

// Importar rutas
const preferencesRoutes = require('./preferencesRoutes.js');
const authRoutes = require('./authRoutes.js')
const categoriesRoutes = require('./categoriesRoutes.js'); 


// Rutas de tareas
router.use('/preferences', preferencesRoutes);
router.use('/auth', authRoutes)
router.use('/categories', categoriesRoutes); 


module.exports = router;
