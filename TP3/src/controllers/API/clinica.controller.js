const ModeloClinica = require("../../models/mock/clinica.model.js");
const TurnosModel = require("../../models/mock/turnos.models.js")

class ClinicaController{

    async getAllPacientes(req, res){
        try{
            const pacientes = await ModeloClinica.getAllPacientes();
            res.json(pacientes);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async getAllTurnos(req, res){
        try{
            const turnos = await ModeloClinica.getAllTurnos();
            res.json(turnos);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async getPacientesConTurnos(req, res){
        try{
            const pacientes = await ModeloClinica.getPacientesConTurnos();
            res.json(pacientes);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async crearTurnoDisponible(req, res){
        try{
            const{fecha, hora} = req.body;
            const nuevoTurno = await TurnosModel.crearTurnoDisponible(fecha, hora);
            res.status(201).json(nuevoTurno);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }

    //////////////////// le pasa los parametros x separado (hora, fecha, id) o el turno completo
    async reservarTurnoDisponible(req, res){
        try{
            // le pasa el ID del paciente
            // preguntar
            const {fecha, hora} = req.body;
            const nuevoTurno = await TurnosModel.crearNuevoTurno(req.user.userId, fecha, hora);
            res.status(201).json(nuevoTurno);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = new ClinicaController();


