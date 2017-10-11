const express= require('express');
const Router= express.Router();

Router.get('/',(req,res) =>{
    res.send('ok');
});

Router.get('/Granite',(req,res) =>{
    res.send('ganite india');
});

Router.get('/Granite/BlackGalaxy',(req,res) =>{
    res.send("Back Galaxy");
});
Router.get('/Granite/ImperialRed',(req,res) =>{
    res.send("ImperialRed");
});
Router.get('/Granite/RubyRed',(req,res) =>{
    res.send("Ruby Red");
});
Router.get('/Granite/TanBrown',(req,res) =>{
    res.send("Tan Brown");
});
module.exports= Router;