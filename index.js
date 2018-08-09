const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const passport = require('./config/passportConfig.js');
const session = require('express-session');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({ secret: 'oauths are stupid', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.get('/',
//   function(req, res) {
//     res.render('home', { user.req.user });
//   });

app.get('/', (req, res) => {
  console.log('This is the user' + req.user)
    res.json({
      status: "session cookie whatever"
    });
});

app.get('/login',
  function(req, res) {
    res.render('login')
  });

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    res.render('profile', { user: req.user });
  });

  app.listen(3001, () => {
    console.log('Server gitting run on port 3001')
  });
