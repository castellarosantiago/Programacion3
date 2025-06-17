const Joi = require("joi");

const joiPacientesRegister = (req, res, next) => {
  const schema = Joi.object({
    dni: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    if (req.accepts("html")) {
      return res.render("pacientes-register", {
        error: error.details[0].message,
        success: null,
      });
    }
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const joiPacientesLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().min(4).required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    if (req.accepts("html")) {
      return res.render("pacientes-login", {
        error: error.details[0].message,
        success: null,
      });
    }
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { joiPacientesRegister, joiPacientesLogin };
