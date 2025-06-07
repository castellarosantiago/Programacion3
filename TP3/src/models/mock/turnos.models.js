class TurnosModel {
    constructor() {
        this.data = [
            {id: 1, fecha: '2025-06-10', hora: '10:00', pacienteId: null},
            {id: 2, fecha: '2025-06-11', hora: '11:00', pacienteId: null}
        ];
        this.id =3;
    }

    async getAllTurnos() {
        return this.data;
    }

    async reservarTurnoDisponible(turnoId, pacienteId) {
        const turno = tis.data.find(t => t.id == turnoId);
        if(turno && !turno.pacienteId) {
            turno.pacienteId = pacienteId;
            return turno;
        }
        throw new Error('Turno no disponible');
    }

    async cancelarTurno(turnoId, pacienteId) {
        const turno = this.data.find(t => t.id == turnoId && t.pacienteId === pacienteId);
        if(turno) {
            turno.pacienteId = null;
            return turno;
        }
        throw new Error('No se puede cancelar este turno');
    }
}

module.exports = new TurnosModel();