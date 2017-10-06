const mongoose = require('mongoose');

const userModel = require('./userModel');

var createUser = (data, callback) => {
    userModel.findOne({})
      .select('id')
      .sort({id : -1})
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          var id;
          if (doc && doc.id) {
            id = doc.id + 1;
          } else {
            id = 1;
          }
          data.id = id;
          userModel.create(data, (err, doc) => {
            if (err) {
              console.log(err);
              console.log('message', err.message);
              console.log('error message', err.errmsg);
              callback(err);
            } else {
              callback(null,doc);
            }
          })
        }
      })
  }

  var getUserByUsername = (username, callback) => {
    try {
      userModel.findOne({username : username}).exec((err,doc) => {
        if(err){
          console.log(err);
        }else{
          return callback(null,doc);
        }
      })
  
    } catch (e) {
      console.log(e);
      callback(e);
    }
  }

  var findUserById = (data,cb) =>{
      userModel.findOne({id:data},(err,doc) =>{
          if(err) return cb(err);
          else return cb(null,doc);
      })
  }

  module.exports = {
      createUser,
      getUserByUsername,
      findUserById
  }