const express = require("express");
const dotenv = require("dotenv");

<<<<<<< HEAD
const rutaPacientes = require('./routes/pacientes.route.js');
const rutaTurnos = require('./routes/turnos.route.js')
const home = require('./routes/home.routes.js');
const morgan = require('morgan');
=======
const rutaPacientes = require("./routes/pacientes.routes.js");
const rutaTurnos = require("./routes/turnos.routes.js");
const home = require("./routes/home.routes.js");
const morgan = require("morgan");
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
dotenv.config();

class Server {
  constructor(template = process.env.TEMPLATE || "ejs") {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    //this.cors()
<<<<<<< HEAD
    this.engine(template)
    this.rutas()

    
=======
    this.engine(template);
    this.rutas();
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
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

<<<<<<< HEAD
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
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
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
