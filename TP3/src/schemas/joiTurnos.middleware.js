const Joi = require('joi');
const { validate } = require('../middlewares/joiValidate');

const turnoSchema = Joi.object({
  fecha: Joi.date().required(),
  hora: Joi.string().required()
});

const validarTurno = validate(turnoSchema);

module.exports = { validarTurno };