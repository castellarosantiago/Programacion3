const { Users } = require('../models');

const authController = {

  registro: async (req, res) => {
    try {
      const { email, pass } = req.body;

      if (!email || !pass) {
        return res.status(400).json({ mensaje: 'Mail y contraseña son requeridos' });
      }

      if (pass.length < 8) {
        return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 8 caracteres' });
      }

      // verificar si ya existe
      const usuarioExistente = await Users.findOne({ where: { mail: email } });
      if (usuarioExistente) {
        return res.status(400).json({ mensaje: 'El usuario ya existe' });
      }

      // crearlo
      const nuevoUsuario = await Users.create({
        mail: email,
        password: pass
      });

      res.status(201).json({
        mensaje: 'Usuario registrado correctamente',
        usuario: { id: nuevoUsuario.id_user, email: nuevoUsuario.mail }
      });

    } catch (error) {
      console.error('Error en registro:', error);
      res.status(500).json({ mensaje: 'Error registrando el usuario' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, pass } = req.body;

      if (!email || !pass) {
        return res.status(400).json({ mensaje: 'Mail y contraseña son requeridos' });
      }

      // buscamos x mail
      const usuario = await Users.findOne({ where: { mail: email } });
      if (!usuario) {
        return res.status(401).json({ mensaje: 'Datos de inicio inválidos' });
      }

      //  contraseña
      const passwordValida = await compare(pass, usuario.password);
      if (!passwordValida) {
        return res.status(401).json({ mensaje: 'Datos de inicio inválidos' });
      }
      
      // Respuesta exitosa
      res.status(200).json({
        mensaje: 'Login exitoso',
        usuario: {
          id: usuario.id_user,
          email: usuario.mail
        }
      });

    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ mensaje: 'Error iniciando sesion' });
    }
  }
};

module.exports = authController;