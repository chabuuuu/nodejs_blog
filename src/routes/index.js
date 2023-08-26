const newsRouter = require('./news');
const siteRouter = require('./site');
const itemsRouter = require('./items');

function route(app) {
    //news
    app.use('/news', newsRouter);

    //items
    app.use('/items', itemsRouter);

    //site
    app.use('/', siteRouter);
}

module.exports = route;
