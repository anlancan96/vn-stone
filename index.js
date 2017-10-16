var express = require('express');
var app = express();
const Passport = require('passport');
const chinaStone = require(__dirname + "/src/chinaStone");
const egyptStone = require(__dirname + "/src/egyptStone");
const indiaStone = require(__dirname + "/src/indiaStone");
const italyStone = require(__dirname + "/src/italyStone");
const spainStone = require(__dirname + "/src/spainStone");
const turkeyStone = require(__dirname + "/src/turkeyStone");
const vietNamStone = require(__dirname + "/src/vietNamStone");
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ extend: true }));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(session({
  secret: "khang",
  cookie: {
    maxAge : 1000*60*5*1000 //khoang thoi gian luu cookie
    }
  }))
app.use(Passport.initialize());
app.use(Passport.session());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('/chinaStone', chinaStone);
app.use('/egyptStone', egyptStone);
app.use('/indiaStone', indiaStone);
app.use('/italyStone', italyStone);
app.use('/spainStone', spainStone);
app.use('/turkeyStone', turkeyStone);
app.use('/vietNamStone', vietNamStone);

var option = {
  server: {
      socketOptions: {
          keepAlive: 300000,
          connectTimeoutMS: 30000
      }
  },
  replset: {
      socketOptions: {
          keepAlive: 300000,
          connectTimeoutMS: 30000
      }
  }
};

mongoose.connect("mongodb://localhost/MHStone",option ).then(function(){
  console.log("connent db!");
},function(err){
  console.log(err);
})

app.listen(6969, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home.ejs'));
app.get('/product', (req, res) => res.render('home'));
app.get('/liststone', (req, res) => res.render('home'));
app.get('/a',(req,res) =>{
    res.render('home');
})