const express = require('express');
const cors = require('cors');
const app = express();
const imageRoutes = require('./routes/images');
const breathRoutes = require('./routes/breath');
const preferenceRoutes = require('./routes/preferences');

app.use(cors());
app.use(express.json());

app.use('/images', imageRoutes);
app.use('/breath', breathRoutes);
app.use('/preferences', preferenceRoutes);

module.exports = app;