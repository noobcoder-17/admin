const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var PORT = process.env.PORT || 3000;
var path = require('path');

var indexRouter = require('./routes/index');

const app =express();

app.engine('.hbs' , exphbs({defaultLayout:'main',extname:'.hbs'}));

app.set('view engine','.hbs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.use('/', indexRouter);

app.listen(PORT, () => {
 console.log('Example app is running → PORT 3000');
});

module.exports = app;