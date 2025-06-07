const express = require('express');
const router = express.Router();
const clinicaAuth = require('../controllers/home/clinicaAuth.controller.js');

router.get('/login', clinicaAuth.getLogin);
router.post('/login', clinicaAuth.postLogin);
router.get('/logout', clinicaAuth.logout);

module.exports = router;