const Item = require('../models/Item');
const { multiMongooseToObject } = require('../../util/mongoose.js');
class MeController {
    //[Get] /me/stored/items
    async storedItems(req, res, next) {
        try {
            var value = await Item.find({}).exec();
            res.render('me/stored-items', {
                items: multiMongooseToObject(value),
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
