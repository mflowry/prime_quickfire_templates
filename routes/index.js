var express = require('express');
var router = express.Router();
var students = require('../models/students.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fname: fname, lname: lname });
});


module.exports = router;
