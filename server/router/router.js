
var express = require('express');
var router = express.Router();
var Book = require('../models/Book');
var User=require('../models/User');
var crypto=require('crypto');
//HOME
router.get("/", function (req, res) {
  res.json({ "status": true, "data": "Hello world!" });
});
/***********************BOOK***********************/
/* GET ALL BOOKS */
router.get('/books', function(req, res, next) {
  Book.find(function (err, data) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error fetching data!" };
      res.json(response);
      return;
    }
    response = { "status": true, "data": data};
    res.json(response);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/books/:id', function(req, res, next) {
  Book.findOne({_id: req.params.id}, function (err, data) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error fetching data!" };
      res.json(response);
      return;
    }
    response = { "status": true, "data": data};
    res.json(response);
  });
});

/* SAVE BOOK */
router.post('/books', function(req, res, next) {
  Book.create(req.body, function (err, data) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error create data!" };
      res.json(response);
      return;
    }
    response = { "status": true, "data": "Create data success!"};
    res.json(response);
  });
});

/* UPDATE BOOK */
router.put('/books', function(req, res, next) {
  Book.findOneAndUpdate({_id:req.body._id}, req.body, function (err, post) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error update data!" };
      res.json(response);
      return;
    }
    response = { "status": true, "data": "Update data success!"};
    res.json(response);
  });
});

/* DELETE BOOK */
router.delete('/books/:id', function(req, res, next) {
  Book.findOneAndRemove({_id:req.params.id}, req.body, function (err, post) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error delete data!" };
      res.json(response);
      return;
    }
    response = { "status": true, "data": "Delete data success!"};
    res.json(response);
  });
});
/***********************USER***********************/
/*Login*/
router.post('/login',function(req,res,next){
    User.findOne({username: req.body.username}, function (err, data) {
      var response = {};
      if(err){
        response = { "status": false, "data": "Error fetching data!" };
        res.json(response);
        return;
      }
      if(data==null){
        response = { "status": false, "data": "Null data!" };
        res.json(response);
        return;
      }
      if(data.password==req.body.password){
         response = { "status": true, "data": data};
         res.json(response);
         return;
      }
      response = { "status": false, "data": "Login fail!" };
      res.json(response);
    });
});
/*Register*/
router.post('/register', function(req, res, next) {
  //create Token
  req.body.token=crypto.randomBytes(64).toString('hex');
  //check user
  User.findOne({username: req.body.username}, function (err, data) {
    var response = {};
    if(err){
      response = { "status": false, "data": "Error fetching data!" };
      res.json(response);
      return;
    }
    if(data==null){
      User.create(req.body, function (err, data) {
        var response = {};
        if(err){
          response = { "status": false, "data": "Error register!" };
          res.json(response);
          return;
        }
        response = { "status": true, "data": "Register data success!"};
        res.json(response);
      });
      return;
    }
    response = { "status": false, "data": "User already exists!" };
    res.json(response);
  });
});
module.exports = router;