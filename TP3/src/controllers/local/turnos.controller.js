const turnosModel = require('../../models/mock/turnos.models');

const renderizarTurnos = async(req, res) => {
    const turnos = await turnosModel.turnos;
    res.render('turnos', {turnos});
};

module.exports = {renderizarTurnos};