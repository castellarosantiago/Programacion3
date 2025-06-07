const turnosModel = require("./turnos.models.js");
const pacientesModel = require("./pacientes.models.js");

class ModeloClinica {
    getAllPacientes() {
        return pacientesModel.list();
    }

    getAllTurnos() {
        return turnosModel.getAllTurnos();
    }

    async getPacientesConTurnos() {
        const pacientes = await pacientesModel.list();
        const turnos = await turnosModel.getAllTurnos();
        return pacientes.map(paciente => ({
            ...paciente,
            turnos: turnos.filter(t => t.idPaciente === paciente.id)
        }));
    }


}

module.exports = new ModeloClinica();