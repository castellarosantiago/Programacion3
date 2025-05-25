const Identificador = require("./identificador.entity");

class Turno extends Identificador{
    constructor(fecha, id, idPaciente){
        super(id);
        this.fecha = fecha;
        this.idPaciente = idPaciente;
    }
}
module.exports = Turno;