# recorrido del sistema de clinica y pacientes para el TP3 implementado por Lourdes Gerdes, Santiago Minor, Paula General y Santiago Castellaro

Esta documentacion tiene el objetivo de desarmar cada parte del codigo, para la comprension y eventual repaso del grupo sobre el mismo, y cumplir con el requisito del Trabajo Practico.

---

## 1. Estructura de carpetas:

```
docs/
    diagrama.drawio
    documentacion.md
src/
    index.js
    server.js
    config/
      config.js
    controllers/
      API/
        clinica.controller.js
        ...
      home/
        home.controller.js
      local/
    css/
      styles.css
    middlewares/
      joiValidate.js
      verifyToken.middleware.js
    models/
      mock/
        entities/
          paciente.entity.js
          identificador.entity.js
        pacientes.models.js
        ...
      sqlite/
        config/
          db.js
        entities/
          paciente.entity.js
        paciente.model.js
        ...
    routes/
      clinica.routes.js
      home.routes.js
      pacientes.routes.js
      turnos.routes.js
    schemas/
      joiPacientes.middleware.js
      joiTurnos.middleware.js
    views/
      ejs/
        index.ejs
        ...
      pug/
        index.pug
        ...
.env.template
.gitignore
package.json
```

---

## 2. Instalacion de dependencias
```sh
npm init -y
npm install express ejs express-session cookie-parser jsonwebtoken joi
```

## 3. Config basica de Express y EJS

```JS
// src/server.js

const express = require('express');
const session = require('express-session');
const coockieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'css')));
app.use(cookieParser());
app.use(session({
    secret: 'clinicaSecret',
    resave: false,
    saveUnitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'ejs'))

//rutas 

const clinicaAuthRoutes = require('./routes/clinicaAuth.routes.js');
const clinicaRoutes = require('./routes/clinica.routes.js');
const pacientesViewsRoutes = require('./routes/pacientes.views.routes.js');

app.use('/clinica', clinicaAuthRoutes);
app.use('/clinica', clinicaRoutes);
app.use('/pacientes', pacientesViewsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
```

---

## 4. Modelo mock Pacientes

```javascript
// src/mock/pacientes.models.js
const jwt = require('jsonwebtoken');
const Config = require('../src/config/config.js');

class PacientesModel {
    constructor() {
        this.data = [
            {  id: 1, dni: '123', nombre : 'Sergio', apellido: 'Antozzi', email: 'antozzisergio@gmail.com', password: '1234'}
        ];
        this.id = 2;
    }

    async crearPaciente({dni, nombre, apellido, email, password}) {
        if (this.data.find(p => p.email === email)) throw new Error('Email ya registrado');
        const paciente = {id: this.id++, dni, nombre, apellido, email, password};
        this.data.push(paciente);
        return(paciente);
    }

    async validarPaiente(email, password) {
        const paciente = this.data.find(p => p.email === email && p.password === password);
        if(!paciente) throw new Error('Email o contraseña invalidos');
        return jwt.sign({userId: paciente.id, nombre: paciente.nombre, email: paciente.email}, Config.secretWord, {expiresIn: '2h'});
    }

    async getAllPacientes() {
        return this.data;
    }
}

module.exports new = PacientesModel();
```

---

## 5. Modelo mock Turnos

```javascript
// src/models/mock/turnos.models.js
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
```

---

## 6. Middleware JWT (con cookies)

```javascript
// src/middlewares/verifyToken.middleware.js
const jwt = require('jsonwebtoken');
const Config = require('../config/config.js');

const verifyTokenMiddleware = (req, res, next) => {
    const token = req.cookies?.pacienteToken || req.cookies?.clinicaToken || req.header('auth');
    if(!token) {
        if(req.originalUrl.startsWith('/clinica')) return res.redirect('/clinica/login');
        return res.redirect('/pacientes/login');
    }
    try {
        const decoded = jwt.verify(token, Config.secretWord);
        req.user = decoded;
        next();
    } catch(error) {
        res.clearCookie('pacienteToken');
        res.clearCookie('clinicaToken');
        if(req.originalUrl.startsWith('/clinica')) return res.redirect('clinica/login');
        return res.redirect('/pacientes/login');
    }
};

module.exports = {
    verifyTokenMiddleware
};
```

---

## 7.Middle de validacion JOI

```javascript
// src/shcemas/joiPacientes.middleware.js
const Joi = require('joi');

const joiPacientesRegister = (req, res, next) => {
    const schema = joi.object({
        dni: Joi.string().required(),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.render('pacientes-register', {error: error.details[0]. message, succes: null});
    next();
};

const joiPacientesLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(4).required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.render('pacientes-login', {error: error.details[0].message, succes: null});
    next();
};

module.exports = { joiPacientesRegister, joiPacientesLogin };
```

---

## 8. Controlador y rutas de login para la clinica

## CONTROLADOR

```javascript
// src/controllers/home/clinicaAuth.controller.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'clinicaSecret';

const CLINICA_USER = 'admin';
const CLINICA_PASS = 'admin123';

exports.getLogin = (req, res) => {
    res.render('clinica-login', { error: null});
};

exports.postLogin = (req, res) => {
    const { usuario, password } = req.body;
    if(usuario === CLINICA_USER && password === CLINICA_PASS) {
        const token = jwt.sign({ usuario }, JWT_SECRET, { expiresIn: '2h'});
        res.cookie('clinicaToken', token, { httpOnly: true });
        res.redirect('/clinica/pacientes');
    }else {
        res.render('/clinica-login', { error: 'Usuario o contraseña incorrectos'});
    }
};

exports.logout = (req, res) => {
    res.clearCookie('clinicaToken');
    res.redirect('/clinica/login');
}
```

# RUTAS 

```javascript
// src/routes/clinicaAuth.routes.js
const express = require('express');
const router = express.Router();
const clinicaAuth = require('../controllers/home/clinicaAuth.controller.js');

router.get('/login', clinicaAuth.getLogin);
router.post('/login', clinicaAuth.postLogin);
router.get('/logout', clinicaAuth.logout);

module.exports = router;
```

---

## 9. Rutas y controlador para la clinica (protegidas)

## RUTAS

```javascript
// src/routes/clinica.routes.js
const { Router } = require('express');
const clinicaCotroller =  require('../controllers/API/clinica.controoller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const router = Router();

router.get('/pacientes', verifyTokenMiddleware, clinicaController.vistaPacientes);
router.get('/pacientes/nuevo', verifyTokenMiddleware, clinicaController.nuevoPaciente);
router.post('/pacientes/nuevo', verifyTokenMiddleware, clinicaController.crearPaciente);

router.get('/turnos', verifyTokenMiddleware, clinicaController.vistaTurnos);
router.post('/turnos/asignar/:id', verifyTokenMiddleware, clinicaController.asignarTurno);
router.post('/turnos/cancelar/:id', verifyTokenMiddleware, clinicaController.cancelarTurno);

module.exports = router;
```

### CONTROLADOR

```javascript
// src/controllers/API/clinica.controller.js
const pacientesModel = require('../../models/mock/pacientes.models.js');
const turnosModel = require('../../models/mock/turnos.models.js');

class ClinicaController {
    async vistaPacientes(req, res) {
        const pacientes = await pacientesModel.list();
        res.render('pacientes', { pacientes });
    }

    nuevoPaciente(req, res) {
        res.render('nuevo-paciente', {error: null});
    }

    async crearPaciente(req, res) {
        const {dni, nombre, apellido, email, password } = req.body;
        try{
            await pacientesModel.create({dni, nombre, apellido, email, password});
            res.redirect('/clinica/pacientes');
        }catch(error){
            res.render('nuevo-paciente', { error: error.message });
        }
    }

    async vistaTurnos(req, res) {
        const turnos = await turnosModel.getAllTurnos();
        const paciente = await pacientesModel.getAllPacientes();
        res.render('turnos', {turnos, pacientes});
    }

    async asignarTurno(req, res) {
        const turnoId = req.params.id;
        const pacienteId = req.body.pacienteId;
        await turnosModel.reservarTurnoDisponible(turnoId, pacienteId);
        res.redirect('/clinica/turnos');
    }

    async cancelarTurno(req, res) {
        const turnoId = req.params.id;
        await turnosModel.cancelarTurno(turnoId);
        res.redirect('/clinica/turnos');
    }
}

module.exports = new ClinicaController();
```

---

## 10. Rutas y controlador para pacientes (VISTAS Y LOGICA)

## RUTAS 

```javascript
// src/routes/pacientes.views.routes.js
const { Router } = require('express');
const pacientesViewsController = require('../controllers/pacientes.views.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const { joiPacientesRegister, joiPacientesLogin } = require('../schemas/joiPacientes.middleware.js');

const router = Router();

reouter.get('/login', pacientesViewsController.getLogin);
router.post('/login', joiPacientesLogin, pacientesViewController.postLogin);
router.get('/register', pacientesViewsController.getRegister);
router.post('/register', joiPacientesRegister, pacientesViewsController.postRegister);

router
```