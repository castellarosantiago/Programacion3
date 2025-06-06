const Identificador = require("./identificador.entity");

class Turno extends Identificador{
<<<<<<< HEAD
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
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
    }
}
module.exports = Turno;