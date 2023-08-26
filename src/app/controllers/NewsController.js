class NewsController {
    //[Get] /news
    index(req, res) {
        res.render('news');
    }

    //[Get] /chi-tiet
    chiTiet(req, res) {
        res.send('chi tiet');
    }
}

module.exports = new NewsController();
