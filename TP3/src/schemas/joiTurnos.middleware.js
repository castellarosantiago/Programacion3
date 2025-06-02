/*
const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

// Simulación de datos recibidos
const datos = {
  email: "paciente@correo.com",
  password: "12345678"
};

const resultado = schema.validate(datos);

if (resultado.error) {
  console.log("Datos inválidos:", resultado.error.details);
} else {
  console.log("Datos válidos.");
}
 */

const Joi = require('joi');
const { validate } = require('../middlewares/joiValidate')

const turnoSchema = Joi.object({
  fecha: Joi.date().required, 
  hora: Joi.string().required()
});

const validarTurno = validate(turnoSchema);

module.exports = {validarTurno};