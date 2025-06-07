const TurnosModel = require("./turnos.models.js")
const PacientesModel = require("./pacientes.models.js");

class ModeloClinica {

  // Constructor?

    async getAllPacientes(){
        return await PacientesModel.list();
    }
    
    async getAllTurnos(){
        return await TurnosModel.mostrarListaTurnos();
    }

    async getPacientesConTurnos(){
        const pacientes = await PacientesModel.list();
        const turnos = await TurnosModel.mostrarListaTurnos();
        return pacientes.map(p => ({
            ...p,
            turnos: turnos.filter(t => t.idPaciente === p.id)
        }));
    }

    crearTurnoDisponible(fecha, hora) {
      return TurnosModel.crearTurnoDisponible(fecha, hora);
    }

    reservarTurnoDisponible(turno) {
      return TurnosModel.crearNuevoTurno(turno);
    }



}

module.exports = new ModeloClinica();





