const express = require('express');
const router = express.Router();
const { getAllCategories, getImagesByCategory } = require('../controllers/categoriesController');

router.get('/', getAllCategories);
router.get('/:categoryId', getImagesByCategory);
module.exports = router;