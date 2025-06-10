const express = require("express");
const app = express();
const personaRoutes = require("./routes/personaRoutes");
const cors = require("cors");

app.use(cors()); // Permitir conexión con el frontend
app.use("/api", personaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
