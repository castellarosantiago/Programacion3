const express = require("express");
const dotenv = require("dotenv");

<<<<<<< .merge_file_N0O8Pb
const rutaPacientes = require('./routes/pacientes.route.js');
const rutaTurnos = require('./routes/turnos.route.js')
const home = require('./routes/home.routes.js');
const morgan = require('morgan');
=======
const rutaPacientes = require("./routes/pacientes.routes.js");
const rutaTurnos = require("./routes/turnos.routes.js");
const home = require("./routes/home.routes.js");
const morgan = require("morgan");
>>>>>>> .merge_file_yT5AXp
dotenv.config();

class Server {
  constructor(template = process.env.TEMPLATE || "ejs") {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    //this.cors()
<<<<<<< .merge_file_N0O8Pb
    this.engine(template)
    this.rutas()

    
=======
    this.engine(template);
    this.rutas();
>>>>>>> .merge_file_yT5AXp
  }

  /*   cors () {
    this.app.use(cors())
  } */

  engine(template) {
    try {
      require.resolve(template);

      this.app.set("view engine", template);
      this.app.set("views", "./src/views/" + template);
    } catch (error) {
      console.log("Error al configurar el motor de plantillas:", template);
    }
  }
  middleware() {
    // this.app.use('/', express.static('public'))
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

<<<<<<< .merge_file_N0O8Pb
  rutas () {
    this.app.use('/api/v1/pacientes', rutaPacientes)
    this.app.use('/',home)

    // aca van las otras rutas
    this.app.use('/api/v1/turnos/:idPaciente', rutaTurnos)
    //this.app.use('')
    
/*
=======
  rutas() {
    this.app.use("/api/v1/pacientes", rutaPacientes);
    this.app.use("/", home);

    // aca van las otras rutas
    this.app.use("/api/v1/turnos/", rutaTurnos);
    
    //this.app.use('')

    /*
>>>>>>> .merge_file_yT5AXp
Consultar turnos por identificador:
GET /api/v1/turnos/:idPaciente

Cancelar un turno:
DELETE /api/v1/turnos/:idTurno

Modificar un Turno:
PUT /api/v1/turnos/:idTurno

Cargar un nuevo turno:
POST /api/v1/turnos
*/
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      );
    });
  }
}

module.exports = Server;
