const Item = require('../models/Item');
const { mongooseToObject } = require('../../util/mongoose');
class ItemsController {
    //[Get] /items/:slug
    async chiTiet(req, res, next) {
        try {
            var value = await Item.findOne({ slug: req.params.slug }).exec();
            if (value == null) {
                res.send('404');
                return;
            }
            res.render('items/chiTiet.hbs', mongooseToObject(value));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ItemsController();
