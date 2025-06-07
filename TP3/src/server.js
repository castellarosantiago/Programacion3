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