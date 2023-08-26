const Item = require('../models/Item');
const { multiMongooseToObject } = require('../../util/mongoose.js');
class SiteController {
    //[Get] /
    async home(req, res, next) {
        try {
            var items = await Item.find({});
            res.render('home', {
                items: multiMongooseToObject(items),
            });
        } catch (error) {
            next(error);
        }
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
