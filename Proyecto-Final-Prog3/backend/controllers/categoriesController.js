const {Categories, Images_category } = require('../models');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll({
            include: [{
                model: Images_category, 
                as: 'Images_categories',
               },
            ],
        });
        res.json(categories);
    }catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Error getting categories' });
    }
};

exports.getImagesByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const images = await Images_category.findAll({
            where: { id_category: categoryId },
            include: [{
                model: Categories,
                as: 'Category',
                attributes: ['name']
            }]
        });
        res.json(images);
    } catch (error) {
        console.error('Error fetching images by category:', error);
        res.status(500).json({ error: 'Error getting images' });
    }
};