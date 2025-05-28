const Turno = require('../../models/mock/entities/turnos.entity');
const turnosModel = require('../../models/mock/turnos.models')

class TurnosController{
    async getTurnosByPaciente(req, res){
    try {
        const {idPaciente} = req.params;
        const turnos = await turnosModel.getTurnosByPaciente(idPaciente);
        resizeBy.status(200).json(turnos);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

async deleteTurno(req, res){
    try{
        const {idTurno} = req.params;
        const turnoCancelado = await turnosModel.deleteTurno(idTurno);
        res.status(200).json({message: 'Turno cancelado', turno: turnoCancelado});
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

async createTurno(req, res){
    try{
        const{fecha, hora} = req.body;
        const nuevoTurno = await turnosModel.createTurno(req.user.userId, fecha, hora);
        res.status(201).json(nuevoTurno);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

}

module.exports = new TurnosController();