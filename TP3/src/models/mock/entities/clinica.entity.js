const Identificador = require("./identificador.entity");

class Clinica extends Identificador{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

module.exports = Clinica;