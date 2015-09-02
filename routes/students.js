var express = require('express');
var router = express.Router();
var path = require('path');
var students = require('../models/students.json');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res) {
  console.log("getting");
  var file = path.join(__dirname, '../models/students.json');
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      next(err);//next middleware--error handler
    } else {
      var studentArray = JSON.parse(data);
      console.log(studentArray);
    }
  });
res.json(students);
});

router.post('/', function(req, res, next){
  console.log("posting");
  var studentArray = students;
  studentArray.push(req.body.fname);
  studentArray.push(req.body.lname);
  //studentArray.push({"fname": req.body.fName, "lname":req.body.lName});
  console.log(studentArray);

  var files = path.join(__dirname, '../models/students.json');

  fs.writeFile(files, JSON.stringify(studentArray), function(err){
    if (err){
      console.log(err);
      res.sendStatus(200).send(err);
    } else {
      res.json(studentArray);
    }
  });
});
module.exports = router;
