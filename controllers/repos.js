require('dotenv').config();
const express = require('express');
const router = express.Router();
//added
const axios = require('axios');
const bodyParser = require('body-parser');
var db = require('../models');

let project = {name: 'portfolio', description: 'blog post here for all the things we like to do'}

router.get('/', function(req, res) {
  if (req.user) {
    db.user.find({
      //using parseInt b/c req.user.github is being passed to the front as a string in the passportConfig ##########
      //should be using parseInt in the passportConfig, b/c if we are using it as a number we should pass it around as a number #############
      where: {githubid: parseInt(req.user.githubid)}
    }).then(function(dbUser) {
      console.log('############ here is dbUser: ', dbUser);
      axios.get(`https://api.github.com/users/${dbUser.username}/repos`).then(function(response) {
        // console.log('here is response.data: ', response.data);
        res.render('repos/all', {repos: response.data});
      });
    });
  } else {
    var string = encodeURIComponent(true);
    res.redirect(`/?toast=${string}`);
  }
});

//testing with one project (data)
router.get('/:name', function(req, res) {
  res.render('repos/show', {repo: req.params.name})
});

module.exports = router;
