const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');
const jwt = require('jsonwebtoken');
const Config = require('../../config/config');

exports.getLogin = (req, res) => {
  res.status(200).json({ message: "Login de paciente" });
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await pacientesModel.validate(email, password);
    res.cookie('pacienteToken', token, { httpOnly: true });
    res.status(200).json({ token, message: "¡Bienvenido!" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.getRegister = (req, res) => {
  res.status(200).json({ message: "Registro de paciente" });
};

exports.postRegister = async (req, res) => {
  try {
    const { dni, nombre, apellido, email, password } = req.body;
    const paciente = await pacientesModel.create({ dni, nombre, apellido, email, password });
    res.status(201).json({ paciente, message: "Registro exitoso. Ahora puedes iniciar sesión." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('pacienteToken');
  res.status(200).json({ message: "Logout exitoso" });
};

exports.getTurnosDisponibles = async (req, res) => {
  const turnos = (await turnosModel.list()).filter(t => !t.pacienteId);
  res.status(200).json({ turnos });
};

exports.getMisTurnos = async (req, res) => {
  const turnos = await turnosModel.list();
  const misTurnos = turnos.filter(t => t.pacienteId === req.user.userId);
  res.status(200).json({ turnos: misTurnos });
};

exports.asignarTurno = async (req, res) => {
  try {
    const turno = await turnosModel.asignar(req.params.id, req.user.userId);
    res.status(200).json({ turno, message: "Turno asignado correctamente." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.cancelarTurno = async (req, res) => {
  try {
    await turnosModel.cancelar(req.params.id, req.user.userId);
    res.status(200).json({ message: "Turno cancelado correctamente." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};