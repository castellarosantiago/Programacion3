class TurnosModel {
    constructor() {
        this.data = [
            { id: 1, fecha: '2025-06-10', hora: '10:00', pacienteId: null },
            { id: 2, fecha: '2025-06-11', hora: '11:00', pacienteId: null }
        ];
        this.id = 3;
    }

    async getTurnosByPaciente(idPaciente) {
        return this.data.filter(t => t.pacienteId == idPaciente);
    }

    async list() {
        return this.data;
    }

    // Asignar turno a paciente (solo si está disponible)
    async asignar(turnoId, pacienteId) {
        const turno = this.data.find(t => t.id == turnoId);
        if (turno && !turno.pacienteId) {
            turno.pacienteId = pacienteId;
            return turno;
        }
        throw new Error('Turno no disponible');
    }

    // Cancelar turno (solo si está asignado al paciente)
    async cancelar(turnoId, pacienteId) {
        const turno = this.data.find(t => t.id == turnoId && t.pacienteId == pacienteId);
        if (turno) {
            turno.pacienteId = null;
            return turno;
        }
        throw new Error('No se puede cancelar este turno');
    }

    // Para la clínica: ver todos los turnos
    async getAllTurnos() {
        return this.data;
    }
}

module.exports = new TurnosModel();