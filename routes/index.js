var express = require('express');
var mongoUtil = require( '../utils/mongoUtil' );
var router = express.Router();

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

module.exports = router;
