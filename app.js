var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');


var app = express();

app.listen(3000, function() {
  console.log("Magic happens on port 3000...");
})

app.set('views', './views');
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', routes);


app.use(function(req,res,next){
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	console.log({error: err});
	res.render('error', {
		message: err.message,
		error: err.status
	});
})


module.exports = app;