var express = require('express');
var mongoUtil = require( '../utils/mongoUtil' );
var router = express.Router();
// var csrf = require('csurf');
// var bodyParser = require('body-parser');
// var parseForm = bodyParser.urlencoded({ extended: false })
// var csrfProtection = csrf({ cookie: true })


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = mongoUtil.getDb();
  db.collection( 'products' ).find().toArray(function(err, docs){
    if (err) throw err;
    //console.log(docs);
    var productChunks=[];
    var chunkSize = 3;
    for(let i=0; i < docs.length; i +=chunkSize){
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'Express', products:productChunks});
  });

});

router.get('/user/signup', function(req, res, next){
  console.log("csruf: "+req.csrfToken());
  res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/postuser', function(req, res, next){
 //res.render('/');
 res.redirect('/');
});
module.exports = router;
