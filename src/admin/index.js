const express= require('express');
const Router= express.Router();
const productController = require("./productController");
const middleware= require('../middleware/middleware');

Router.get('/',middleware.confirmLogin,(req,res) =>{
    res.render('admin');
})


Router.get('/addProduct',middleware.confirmLogin,(req,res) =>{
    
    res.render('addProduct');
})

Router.post('/newProduct', (req, res) => {
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