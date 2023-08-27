const newsRouter = require('./news');
const siteRouter = require('./site');
const itemsRouter = require('./items');
const meRouter = require('./me');

function route(app) {
    //me
    app.use('/me', meRouter);

    //news
    app.use('/news', newsRouter);

    //items
    app.use('/items', itemsRouter);

    //site
    app.use('/', siteRouter);
}

module.exports = route;
