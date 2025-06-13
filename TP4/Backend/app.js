const express = require("express");
const app = express();
const personaRoutes = require("./routes/personas.routes");
const cors = require("cors");

app.use(cors()); // Allow connections from the frontend
app.use("/api", personaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});