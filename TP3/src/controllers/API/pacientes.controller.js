const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');
const jwt = require('jsonwebtoken');
const Config = require('../../config/config.js');

exports.getLogin = (req, res) => {
  res.render('pacientes-login', { error: null, success: null });
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await pacientesModel.validate(email, password);
    res.cookie('pacienteToken', token, { httpOnly: true });
    req.session.success = '¡Bienvenido!';
    res.redirect('/pacientes/turnos');
  } catch (error) {
    res.render('pacientes-login', { error: error.message, success: null });
  }
};

exports.getRegister = (req, res) => {
  res.render('pacientes-register', { error: null, success: null });
};

exports.postRegister = async (req, res) => {
  try {
    const { dni, nombre, apellido, email, password } = req.body;
    await pacientesModel.create({ dni, nombre, apellido, email, password });
    req.session.success = 'Registro exitoso. Ahora puedes iniciar sesión.';
    res.redirect('/pacientes/login');
  } catch (error) {
    res.render('pacientes-register', { error: error.message, success: null });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('pacienteToken');
  res.redirect('/pacientes/login');
};

exports.getTurnosDisponibles = async (req, res) => {
  const turnos = await turnosModel.list();
  const success = req.session.success;
  req.session.success = null;
  res.render('pacientes-turnos', { turnos, user: req.user, error: null, success });
};

exports.getMisTurnos = async (req, res) => {
  const turnos = await turnosModel.list();
  const misTurnos = turnos.filter(t => t.pacienteId === req.user.userId);
  const success = req.session.success;
  req.session.success = null;
  res.render('pacientes-mis-turnos', { turnos: misTurnos, error: null, success });
};

exports.asignarTurno = async (req, res) => {
  try {
    await turnosModel.asignar(req.params.id, req.user.userId);
    req.session.success = 'Turno asignado correctamente.';
    res.redirect('/pacientes/turnos');
  } catch (error) {
    const turnos = await turnosModel.list();
    res.render('pacientes-turnos', { turnos, user: req.user, error: error.message, success: null });
  }
};

exports.cancelarTurno = async (req, res) => {
  try {
    await turnosModel.cancelar(req.params.id, req.user.userId);
    req.session.success = 'Turno cancelado correctamente.';
    res.redirect('/pacientes/mis-turnos');
  } catch (error) {
    const turnos = await turnosModel.list();
    const misTurnos = turnos.filter(t => t.pacienteId === req.user.userId);
    res.render('pacientes-mis-turnos', { turnos: misTurnos, error: error.message, success: null });
  }
};