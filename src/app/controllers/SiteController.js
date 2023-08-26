const Item = require('../models/Item');

class SiteController {
    //[Get] /
    async home(req, res) {
        try {
            const items = await Item.find({});
            res.json(items);
        } catch (error) {
            res.status(400).send('Bad Request');
        }
        // res.render('home');
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
