var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var sassMiddleware = require('node-sass-middleware');


var app = express();

app.listen(3000, function() {
  console.log("Magic happens on port 3000...");
})

app.set('views', './views');


app.use(express.static('public'));
app.use('/', routes);


module.exports = app;