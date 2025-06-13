const express = require("express");
const router = express.Router();
const { obtenerPersonas } = require("../controllers/personasController");

router.get("/personas", obtenerPersonas);

module.exports = router;