class SiteController {

    //[Get] /
    home(req, res){
        res.render('home');
    }

    //[Get] /search
    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;