const Joi = require('joi');

const joiPacientesRegister = (req, res, next) => {
    const schema = joi.object({
        dni: Joi.string().required(),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.render('pacientes-register', {error: error.details[0]. message, succes: null});
    next();
};

const joiPacientesLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(4).required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.render('pacientes-login', {error: error.details[0].message, succes: null});
    next();
};

module.exports = { joiPacientesRegister, joiPacientesLogin };