const express= require('express');
const Router= express.Router();

Router.get('/',(req,res) =>{
    res.send('ok');
})

Router.get('/Marble',(req,res) =>{
    res.send('Marble');
})

module.exports= Router;