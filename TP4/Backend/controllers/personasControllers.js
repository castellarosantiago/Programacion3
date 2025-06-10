const personas = require("../models/personaModel");

const obtenerPersonas = (req, res) => {
  res.json(personas);
};

module.exports = { obtenerPersonas };
