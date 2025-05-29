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

const validarTurno = (req, res, next) => {
  const schema = Joi.object({
    fecha: Joi.date().required(),
    hora: Joi.string().required()
  });

  const {error} = schema.validate(req.body);
  if(error) return res.status(400).json({message: error.details[0].message});
  next();
};

module.exports = {validarTurno};