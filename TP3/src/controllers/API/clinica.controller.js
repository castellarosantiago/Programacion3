const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');

class ClinicaController {
    async vistaPacientes(req, res) {
        const pacientes = await pacientesModel.list();
        res.render('pacientes.ejs', { pacientes });
    }

    nuevoPaciente(req, res) {
        res.render('nuevo-paciente.ejs', {error: null});
    }

    async crearPaciente(req, res) {
        const {dni, nombre, apellido, email, password } = req.body;
        try{
            await pacientesModel.create({dni, nombre, apellido, email, password});
            res.redirect('/clinica/pacientes');
        }catch(error){
            res.render('nuevo-paciente.ejs', { error: error.message });
        }
    }

    async vistaTurnos(req, res) {
        const turnos = await turnosModel.getAllTurnos();
        const pacientes = await pacientesModel.getAllPacientes();
        res.render('turnos.ejs', {turnos, pacientes});
    }

    // Asignar turno a paciente (desde la clínica)
    async asignarTurno(req, res) {
        const turnoId = req.params.id;
        const pacienteId = req.body.pacienteId;
        try {
            await turnosModel.asignar(turnoId, pacienteId);
            res.redirect('/clinica/turnos');
        } catch (error) {
            // Podrías mostrar un mensaje de error en la vista si lo deseas
            res.redirect('/clinica/turnos');
        }
    }

    // Cancelar turno (deja el turno disponible)
    async cancelarTurno(req, res) {
        const turnoId = req.params.id;
        // Busca el turno y cancela sin importar el paciente
        const turno = (await turnosModel.getAllTurnos()).find(t => t.id == turnoId);
        if (turno && turno.pacienteId) {
            await turnosModel.cancelar(turnoId, turno.pacienteId);
        }
        res.redirect('/clinica/turnos');
    }
}

module.exports = new ClinicaController();