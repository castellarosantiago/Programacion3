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