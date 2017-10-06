const express = require('express');
const Router = express.Router();
const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./userModel');
const userController = require('./userController');
const bcrypt = require('bcrypt');
const session = require('express-session');

Router.use(Passport.initialize());
Router.use(Passport.session());

Passport.use(new LocalStrategy(
    (username,password,done) => {
      userController.getUserByUsername(username,(err,data) => {
        if(data){
          bcrypt.compare(password,data.password,(err,res) => {
            if(res){
              return done(null,data);
            }else{
              return done(null,false);
            }
          })
        }else{
  
          console.log('user not found');
          return done(null,false,{message: 'user khong thấy'});
        }
      })
    }
  ))

  Passport.serializeUser((user, done) => {
    console.log('lưu vào ss');
    done(null,user.id);
  })

  Passport.deserializeUser((user,done) => {
    userController.findUserById(user,(err,data) => {
      if(err){
        console.log(err);
        return(null,false);
      }else{
        if (data) {
          return done(null,data);
          console.log('h');
        }else {
          return done(null,false);
        }
      }
    })
  })

  Router.post('/signup', (req, res) => {
    var newUser = {
      username : req.body.username,
      password : req.body.password
    }
    userController.createUser(newUser, (err, doc) => {
      if (err) {
        console.log(err);
        res.send('Co loi');
      } else {
        res.redirect('/');
      }
    })
  });

  Router.get('/', (req,res) => {
    res.render('login');
  })
  Router.route('/login')
  .post(Passport.authenticate('local', {failureRedirect: '/',
                                        successRedirect: '/admin'}));

 module.exports = Router;