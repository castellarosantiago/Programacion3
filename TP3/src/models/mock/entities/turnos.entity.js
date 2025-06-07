const Identificador = require("./identificador.entity");

class Turno extends Identificador{
    constructor(fecha, id, idPaciente, estaDisponible){
        super(id);
        this.fecha = fecha;
        this.idPaciente = idPaciente;
        this.estaDisponible = estaDisponible;
    }
}
module.exports = Turno;