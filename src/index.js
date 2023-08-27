const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index');
const path = require('path');
var methodOverride = require('method-override');
const { log } = require('console');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Override method
app.use(methodOverride('_method'));

// HTTP LOG
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(path.join(__dirname, 'resources/views'))

//Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port localhost:${port}`);
});
