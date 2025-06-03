


const turnosModel = require("./turnos.models.js")
const pacientesModel = require("./pacientes.models.js")


class ModeloClinica {
    getAllPacientes(){
        return PacientesModel.list();
    }

    getAllTurnos(){
        return turnosModel.mostrarListaTurnos();
    }

    async getPacientesConTurnos(){
        const pacientes = await pacientesModel.list();
        const turnos = await turnosModel.getAllTurnos();
        return pacientes.map(p => ({
            ...p,
            turnos: turnos.filter(t => t.idPaciente === paciente.id)
        }));
    }
}

module.exports = new ModeloClinica();





