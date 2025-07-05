const express = require('express');
const router = express.Router();
const { BreathSetting, User } = require('../models');

router.get('/', async (req, res) => {
  const user = await User.findOne({ where: { email: 'demo@meditacion.com' } });
  const breaths = await BreathSetting.findAll({ where: { UserId: user.id } });
  res.json(breaths);
});

router.post('/', async (req, res) => {
  const { title, inhale, hold, exhale, cicles } = req.body;
  const user = await User.findOne({ where: { email: 'demo@meditacion.com' } });
  const newBreath = await BreathSetting.create({ title, inhale, hold, exhale, cicles, UserId: user.id });
  res.status(201).json(newBreath);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await BreathSetting.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;