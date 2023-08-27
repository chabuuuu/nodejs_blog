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
            res.render('items/chiTiet', mongooseToObject(value));
        } catch (error) {
            next(error);
        }
    }

    //[Get] /items/create
    async create(req, res, next) {
        res.render('items/create');
    }

    //[Post] /items/store
    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image =
                'https://i.ytimg.com/vi/' + req.body.video + '/hq720.jpg';
            await Item.create(formData);
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ItemsController();
