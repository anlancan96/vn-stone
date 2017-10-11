const express= require('express');
const Router= express.Router();

Router.get('/',(req,res) =>{
    res.send('ok');
});

Router.get('/Granite-Ai-Cap',(req,res) =>{
    res.send('Grntine Ai Cập');
});

Router.get('/Marble-Ai-Cap',(req,res) =>{
    res.send('Marble Ai Cập');
});

module.exports= Router;