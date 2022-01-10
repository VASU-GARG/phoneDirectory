var express = require('express');
var router = express.Router();

var collectionModel = require('../mongoose');

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/add' ,function(req,res){
  res.render('add');
})

router.get('/see' ,function(req,res){
  var getAllRecords = collectionModel.find({});
  getAllRecords.exec(function(err,data){
    if(err) throw err;
    if(data.length == 0){
      res.render('seeAll', {message:"No contact found"});
    }
    else{
      res.render('seeAll', {allContacts:data})
    }
  })
})


router.post('/addNewContact',urlencodedParser, function(req,res){

  var record = new collectionModel({
    name:req.body.name,
    phoneNumber: req.body.phone
  });
  record.save(function(err,ress){
    if(err) throw err;
    res.render('add', {message:"CONTACT ADDED SUCCESSFULLY"});
  });
})



router.post('/searchContact', urlencodedParser, function(req,res){
  var nameEntered = req.body.nameEntered;
  var getAllRecords = collectionModel.find({name: {$regex : new RegExp(nameEntered, "i")}});
  getAllRecords.exec(function(err,data){
    if(err) throw err;
    if(data.length == 0){
      res.render('seeAll', {message:'No Contact Found'});
    }
    else{
      res.render('seeAll',{allContacts:data});
    }
  });
});



module.exports = router;
