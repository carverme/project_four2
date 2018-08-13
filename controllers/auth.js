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

// router.get('/login', function(req, res) {
//     res.render('login')
//   });

router.get('/logout', function(req, res) {
  req.logout();
  passport.user = null;  // Without this I never get logged out, even though session is deleted.
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err)
      } else {
        res.redirect('/');
      }
    });
  }
});

router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("################## in the successful login callback ##################")
    // Successful authentication, redirect home.
    console.log("Now lets see what is attached to the req object");
    console.log(req.user);
    // res.send('yooooooo');
    res.redirect('/repos');
  });

  router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
      res.render('profile', { user: req.user });
  });


  module.exports = router;
