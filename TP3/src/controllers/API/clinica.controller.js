const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');

class ClinicaController {
    async vistaPacientes(req, res) {
        const pacientes = await pacientesModel.list();
        res.status(200).json({ pacientes });
    }

    nuevoPaciente(req, res) {
        res.status(200).json({ message: "Formulario para nuevo paciente" });
    }

async crearPaciente(req, res) {
    try {
        console.log('BODY:', req.body);
        const {dni, nombre, apellido, email, password } = req.body;
        if (!dni || !nombre || !apellido || !email || !password) {
            return res.status(400).json({ error: "Faltan datos" });
        }
        const paciente = await pacientesModel.create({dni, nombre, apellido, email, password});
        res.status(201).json({ paciente, message: "Paciente creado correctamente" });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

async vistaPacientes(req, res) {
    const pacientes = await pacientesModel.list();
    if (req.accepts('html')) {
        return res.render('pacientes', { pacientes });
    }
    res.status(200).json({ pacientes });
}

async vistaTurnos(req, res) {
    const turnos = await turnosModel.getAllTurnos();
    const pacientes = await pacientesModel.getAllPacientes();
    if (req.accepts('html')) {
        return res.render('turnos', { turnos, pacientes });
    }
    res.status(200).json({ turnos, pacientes });
}

    async asignarTurno(req, res) {
        const turnoId = req.params.id;
        const pacienteId = req.body.pacienteId;
        try {
            const turno = await turnosModel.asignar(turnoId, pacienteId);
            res.status(200).json({ turno, message: "Turno asignado correctamente" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async cancelarTurno(req, res) {
        const turnoId = req.params.id;
        const turno = (await turnosModel.getAllTurnos()).find(t => t.id == turnoId);
        if (turno && turno.pacienteId) {
            await turnosModel.cancelar(turnoId, turno.pacienteId);
            res.status(200).json({ message: "Turno cancelado correctamente" });
        } else {
            res.status(400).json({ error: "No se puede cancelar el turno" });
        }
    }
}
module.exports = new ClinicaController();