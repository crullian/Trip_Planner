var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  res.send('You are connected to root!');
});



module.exports = router;