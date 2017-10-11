const express= require('express');
const Router= express.Router();

Router.get('/',(req,res) =>{
    res.render('home');
})

Router.get('/Granite',(req,res) => {
    res.send('Granite');
})


Router.get('/Granite/Indianwhite',(req,res) =>{
    res.send('indian white');
})
module.exports= Router;