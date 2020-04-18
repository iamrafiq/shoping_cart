var Product = require('../models/product');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("shop");
  dbo.collection("products").insertMany(products, function(err, res) {
    if (err) throw err;
    console.log("documents inserted");
    db.close();
  });
}); 

var products = [
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  }),
  new Product({
      imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
      title:'Gothic Video Game',
      description:'Awesome Game!!!!',
      price:10
  })

];