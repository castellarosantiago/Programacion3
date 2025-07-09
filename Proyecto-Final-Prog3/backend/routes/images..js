const express = require('express');
const router = express.Router();
const { Image } = require('../models');

router.get('/categories', async (req, res) => {
  const categories = await Image.findAll({ attributes: ['category'], group: 'category' });
  res.json(categories.map(c => c.category));
});

router.get('/', async (req, res) => {
  const { category } = req.query;
  const images = await Image.findAll({ where: { category } });
  res.json(images);
});

module.exports = router;