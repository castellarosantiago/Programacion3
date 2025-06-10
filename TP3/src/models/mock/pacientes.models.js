const jwt = require('jsonwebtoken');
const Config = require('../../config/config.js'); 

class PacientesModel {
    constructor() {
        this.data = [
            { id: 1, dni: '123', nombre: 'Sergio', apellido: 'Antozzi', email: 'antozzisergio@gmail.com', password: '1234' }
        ];
        this.id = 2;
    }

    async create({ dni, nombre, apellido, email, password }) {
        if (this.data.find(p => p.email === email)) throw new Error('Email ya registrado');
        const paciente = { id: this.id++, dni, nombre, apellido, email, password };
        this.data.push(paciente);
        return paciente;
    }

    async validate(email, password) {
        const paciente = this.data.find(p => p.email === email && p.password === password);
        if (!paciente) throw new Error('Email o contraseña invalidos');
        return jwt.sign({ userId: paciente.id, nombre: paciente.nombre, email: paciente.email }, Config.secretWord, { expiresIn: '2h' });
    }

    async list() {
        return this.data;
    }

    async getAllPacientes() {
        return this.data;
    }
}

module.exports = new PacientesModel();