const jwt = require('jsonwebtoken');
const Config = require('../config/config.js');

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.cookies?.pacienteToken || req.cookies?.clinicaToken || req.header('auth');
    if(!token) {
        if(req.originalUrl.startsWith('/clinica')) return res.redirect('/clinica/login');
        return res.redirect('/pacientes/login');
    }
    try {
        const decoded = jwt.verify(token, Config.secretWord);
        req.user = decoded;
        next();
    } catch(error) {
        res.clearCookie('pacienteToken');
        res.clearCookie('clinicaToken');
        if(req.originalUrl.startsWith('/clinica')) return res.redirect('clinica/login');
        return res.redirect('/pacientes/login');
    }
};

module.exports = {
    verifyTokenMiddleware
};