const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');
const jwt = require('jsonwebtoken');
const Config = require('../../config/config');

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
    res.render('pacientes-login.ejs', { error: error.message, success: null });
  }
};

exports.getRegister = (req, res) => {
  res.render('pacientes-register.ejs', { error: null, success: null });
};

exports.postRegister = async (req, res) => {
  try {
    const { dni, nombre, apellido, email, password } = req.body;
    await pacientesModel.create({ dni, nombre, apellido, email, password });
    req.session.success = 'Registro exitoso. Ahora puedes iniciar sesión.';
    res.redirect('/pacientes/login');
  } catch (error) {
    res.render('pacientes-register.ejs', { error: error.message, success: null });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('pacienteToken');
  res.redirect('/pacientes/login');
};

// Ver solo turnos disponibles (no asignados)
exports.getTurnosDisponibles = async (req, res) => {
  const turnos = (await turnosModel.list()).filter(t => !t.pacienteId);
  const success = req.session.success;
  req.session.success = null;
  res.render('pacientes-turnos.ejs', { turnos, user: req.user, error: null, success });
};

// Ver solo los turnos del paciente logueado
exports.getMisTurnos = async (req, res) => {
  const turnos = await turnosModel.list();
  const misTurnos = turnos.filter(t => t.pacienteId === req.user.userId);
  const success = req.session.success;
  req.session.success = null;
  res.render('pacientes-mis-turnos.ejs', { turnos: misTurnos, error: null, success });
};

// Asignar turno disponible al paciente logueado
exports.asignarTurno = async (req, res) => {
  try {
    await turnosModel.asignar(req.params.id, req.user.userId);
    req.session.success = 'Turno asignado correctamente.';
    res.redirect('/pacientes/turnos');
  } catch (error) {
    const turnos = (await turnosModel.list()).filter(t => !t.pacienteId);
    res.render('pacientes-turnos.ejs', { turnos, user: req.user, error: error.message, success: null });
  }
};

// Cancelar turno propio
exports.cancelarTurno = async (req, res) => {
  try {
    await turnosModel.cancelar(req.params.id, req.user.userId);
    req.session.success = 'Turno cancelado correctamente.';
    res.redirect('/pacientes/mis-turnos');
  } catch (error) {
    const turnos = await turnosModel.list();
    const misTurnos = turnos.filter(t => t.pacienteId === req.user.userId);
    res.render('pacientes-mis-turnos.ejs', { turnos: misTurnos, error: error.message, success: null });
  }
};