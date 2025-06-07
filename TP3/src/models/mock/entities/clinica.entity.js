const Identificador = require("./identificador.entity");

class Clinica extends Identificador {
    constructor(email, password, id = 0) {
        super(id);
        this.email = email;
        this.password = password;
    }
}

module.exports = Clinica;