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
            const nuevoTurno = await ModeloClinica.crearTurnoDisponible(fecha, hora);
            res.status(201).json(nuevoTurno);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }

    async reservarTurnoDisponible(req, res){
        try{
            const {fecha, hora, userId, idTurno} = req.body;
            const turno = { userId, fecha, hora, idTurno };
            const nuevoTurno = await ModeloClinica.reservarTurnoDisponible(turno);
            res.status(201).json(nuevoTurno);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = new ClinicaController();


