const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');

class ClinicaController {
    async vistaPacientes(req, res) {
        const pacientes = await pacientesModel.list();
        res.render('pacientes', { pacientes });
    }

    nuevoPaciente(req, res) {
        res.render('nuevo-paciente', {error: null});
    }

    async crearPaciente(req, res) {
        const {dni, nombre, apellido, email, password } = req.body;
        try{
            await pacientesModel.create({dni, nombre, apellido, email, password});
            res.redirect('/clinica/pacientes');
        }catch(error){
            res.render('nuevo-paciente', { error: error.message });
        }
    }

    async vistaTurnos(req, res) {
        const turnos = await turnosModel.getAllTurnos();
        const paciente = await pacientesModel.getAllPacientes();
        res.render('turnos', {turnos, pacientes});
    }

    async asignarTurno(req, res) {
        const turnoId = req.params.id;
        const pacienteId = req.body.pacienteId;
        await turnosModel.reservarTurnoDisponible(turnoId, pacienteId);
        res.redirect('/clinica/turnos');
    }

    async cancelarTurno(req, res) {
        const turnoId = req.params.id;
        await turnosModel.cancelarTurno(turnoId);
        res.redirect('/clinica/turnos');
    }
}

module.exports = new ClinicaController();