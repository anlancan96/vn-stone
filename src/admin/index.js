const express= require('express');
const Router= express.Router();
const productController = require("./productController");
const middleware= require('../middleware/middleware');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./public');
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  }
})
var upload = multer({storage:storage});

Router.get('/',middleware.confirmLogin,(req,res) =>{
    res.render('admin');
})

Router.post('/upImg',upload.single("file"),function (req,res) {
    console.log(req.file);
    res.send('ok');
})

Router.get('/addProduct',middleware.confirmLogin,(req,res) =>{
    
    res.render('addProduct');
})

Router.get('/editProduct',middleware.confirmLogin,(req,res) =>{
  
  res.render('addProduct');
})

Router.post('/newProduct',(req, res) => {
    var newProduct = {
      name:req.body.name,
      money:req.body.money,
      state:req.body.state
    }
    productController.saveProduct(newProduct, (err, doc) => {
      if (err) {
        console.log(err);
        res.send('Co loi');
      } else {
        res.redirect('/');
      }
    })
  });

module.exports= Router;