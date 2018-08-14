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
      axios.get(`https://api.github.com/users/${dbUser.username}/repos`).then(function(response) {
        res.render('repos/all', {repos: response.data});
      });
    });
  } else {
    var string = encodeURIComponent(true);
    res.redirect(`/?toast=${string}`);
  }
});

//testing with one project (data)
router.get('/:id', function(req, res) {
  db.gitrepo.findOne({
    where: {gitid: req.params.id}
  }).then( function(repo){
    console.log('~~~~~~~~~~~~~~~~~~~HERE DINGUS',repo)
    db.timelog.findAll({
      where: {
        gitrepoId: repo.id}
      }).then(function(repolog){
        console.log('~~~~~~~~~~~~~~~~~~~HERE DINGUS', repolog)
        let totalTime = 0;
        repolog.forEach(repo => {
          totalTime += repo.min;
        });
        console.log('$^$^$^$^$^$^$^$^$^$^$ TOTALTIME: ', totalTime)
        res.render('repos/show', {repo: repo, timelogs: repolog, totalTime})
      })
    // console.log('😡   ', repo)

  })
});

router.post('/:id', function(req, res) {
  console.log('CHECK IT')
  console.log('#################', req.body);
    db.gitrepo.findOrCreate({
      where: {
        gitid: req.body.gitid,
        reponame: req.body.reponame
      },
    }).spread((gitrepo, created) => {
      console.log(gitrepo.get({
        plain: true
      }))
      console.log(created);
      res.sendStatus(200);
    });
});

module.exports = router;
