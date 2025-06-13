const personas = require("../models/personasModel");

const obtenerPersonas = (req, res) => {
  res.json(personas);
};

module.exports = { obtenerPersonas };