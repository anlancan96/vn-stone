var express = require('express');
var app = express();
const Passport = require('passport');
const Admin = require(__dirname + "/src/admin/");
const User = require(__dirname + "/src/user");
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
app.use('/admin', Admin);
app.use('/user', User);
mongoose.connect("mongodb://localhost/MHStone", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connect DB success !');
    }
  })

app.listen(6969, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home.ejs'));
app.get('/a',(req,res) =>{
    res.render('home');
})