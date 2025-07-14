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
