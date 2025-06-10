const express = require("express");
const router = express.Router();
const { obtenerPersonas } = require("../controllers/personaController");

router.get("/personas", obtenerPersonas);

module.exports = router;
