require('dotenv').config();
const express = require('express');
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passportConfig.js');
var db = require('./models');
const fs = require('fs')


const app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'oauths are stupid', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('index');
});



  //<-------------Router use-------------->
  app.use('auth', require('./controllers/auth'));


  var server = app.listen(process.env.PORT || 3000);

  module.exports = server;
