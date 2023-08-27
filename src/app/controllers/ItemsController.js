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

    //[Get] /items/id/edit
    async edit(req, res, next) {
        try {
            var value = await Item.findById(req.params.id).exec();
            if (value == null) {
                res.send('404');
                return;
            }
            res.render('items/edit', mongooseToObject(value));
        } catch (error) {
            next(error);
        }
    }
    //[PUT] /items/id
    async update(req, res, next) {
        try {
            await Item.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/items');
        } catch (error) {
            next(error);
        }
    }
    //[DELETE] /items/id
    async delete(req, res, next) {
        try {
            await Item.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ItemsController();
