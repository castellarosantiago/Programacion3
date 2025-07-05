const express = require('express');
const router = express.Router();
const { Preference, User, BreathSetting } = require('../models');

router.get('/', async (req, res) => {
  const user = await User.findOne({ where: { email: 'demo@meditacion.com' } });
  const prefs = await Preference.findAll({ 
    where: { UserId: user.id },
    include: BreathSetting
  });
  res.json(prefs);
});

router.post('/', async (req, res) => {
  const { title, imageCategory, breathSettingId } = req.body;
  const user = await User.findOne({ where: { email: 'demo@meditacion.com' } });
  const newPref = await Preference.create({ title, imageCategory, BreathSettingId: breathSettingId, UserId: user.id });
  res.status(201).json(newPref);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Preference.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;