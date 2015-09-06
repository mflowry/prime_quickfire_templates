var express = require('express');
var router = express.Router();
var path = require('path');
var students = require('../models/students.json');
var fs = require('fs');
var studentArray = [];

/* GET student listing. */
router.get('/', function(req, res) {
  console.log("getting");
  var file = path.join(__dirname, '../models/students.json');//create shortcut for path
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      next(err);//next middleware--error handler
    } else {
      studentArray = JSON.parse(data);
      console.log(studentArray);
      res.json(students);//return student list
    }
  });
});
//post new student information to students.json
//I believe the Ajax post request in public/../app.js uses this router to post

  router.post('/', function(req, res, next) {
    console.log("posting");
    studentArray = students;
    studentArray.push(req.body);
    console.log(studentArray);

  var files = path.join(__dirname, '../models/students.json');

  fs.writeFile(files, JSON.stringify(studentArray), function (err) {
    if (err) {
        console.log(err);
      res.sendStatus(200).send(err);
    } else {
      res.json(studentArray);
    }
  });
});

module.exports = router;
