require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('../config/passportConfig.js');
var db = require('../models');

// app.get('/',
//   function(req, res) {
//     res.render('home', { user.req.user });
//   });

router.get('/', (req, res) => {
  console.log('This is the user' + req.user)
    res.render('/')

    // res.json({
    //   githubid, accesstoken
    // });
});

router.get('/login',
  function(req, res) {
    res.render('login')
  });

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("################## in the successful login callback ##################")
    // Successful authentication, redirect home.
    console.log("Now lets see what is attached to the req object");
    console.log(req.user);
    res.send('WHERE AM I?????????');
  });

  router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
      res.render('profile', { user: req.user });
  });


  module.exports = router;
