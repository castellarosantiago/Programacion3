const jwt = require('jsonwebtoken');
const JWT_SECRET = 'clinicaSecret';

const CLINICA_USER = 'admin';
const CLINICA_PASS = 'admin123';

exports.getLogin = (req, res) => {
    res.render('clinica-login', { error: null });
};

exports.postLogin = (req, res) => {
    const { usuario, password } = req.body;
    if (usuario === CLINICA_USER && password === CLINICA_PASS) {
        const token = jwt.sign({ usuario }, JWT_SECRET, { expiresIn: '2h' });
        res.cookie('clinicaToken', token, { httpOnly: true });
        res.redirect('/clinica/pacientes');
    } else {
        res.render('clinica-login', { error: 'Usuario o contraseña incorrectos' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('clinicaToken');
    res.redirect('/clinica/login');
};