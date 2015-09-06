var express = require('express');
var router = express.Router();
var students = require('../models/students');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {students:students});
});


module.exports = router;
