
const newsRouter = require('./news')
const siteRouter = require('./site')

function route (app){

    //news
    app.use('/news', newsRouter)
    
    //site
    app.use('/', siteRouter)

}

module.exports = route;