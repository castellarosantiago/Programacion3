const clinicaModel = require("../../models/mock/clinica.model.js");
const modeloClinica = require("../../models/mock/clinica.model.js");
const { turnos } = require("../../models/mock/turnos.models.js");

class ClinicaController{
    async getAllPacientes(req, res){
        try{
            const pacientes = await clinicaModel.getAllPacientes();
            res.json(pacientes);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async getAllTurnos(req, res){
        try{
            const turnos = await clinicaModel.getAllTurnos();
            res.json(turnos);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async getPacientesConTurnos(req, res){
        try{
            const pacientes = await clinicaModel.getPacientesConTurnos();
            res.json(pacientes);
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }

    async reservarTurnoDisponible(req, res){
        try{}catch{(error)
    }
}


async borrarPacientes (req, res){
    try{
        
    }catch(error){

    }
}
}