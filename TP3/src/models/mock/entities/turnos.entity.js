const Identificador = require("./identificador.entity");

class Turno extends Identificador{
<<<<<<< .merge_file_VZU2wN
    constructor(fecha, id, idPaciente){
        super(id);
        this.fecha = fecha;
        this.idPaciente = idPaciente;
=======
    constructor(fecha, id, idPaciente, estaDisponible){
        super(id);
        this.fecha = fecha;
        this.idPaciente = idPaciente;
        this.estaDisponible = estaDisponible;
>>>>>>> .merge_file_PH4BLl
    }
}
module.exports = Turno;