const express = require('express');
const Router = express.Router();
var passport= require('passport');
var session= require('express-session');


Router.use(passport.initialize());
Router.use(passport.session());


var confirmLogin= (req,res,next)=>{
  if(req.isAuthenticated()&&req.user.id===1){
    next();
  }else{
    res.redirect('/');
  }
}



module.exports={
  confirmLogin
}
