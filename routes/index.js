var express = require('express');
var mongoUtil = require( '../utils/mongoUtil' );
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
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
    res.render('shop/index', { title: 'Express', products:productChunks });
  });

});

router.get('/user/signup', function(req, res, next){
  res.render(user/signup, {csrfToken:req.csrfToken});
});
module.exports = router;
