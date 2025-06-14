


const express = require("express");
const router = express.Router();
const { obtenerPersonas } = require("../controllers/personasController");

router.get("/", obtenerPersonas);

module.exports = router;