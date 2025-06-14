const { getPersonas } = require('../models/personasModel');

const obtenerPersonas = (req, res) => {
  res.json(getPersonas());
};

module.exports = { obtenerPersonas };