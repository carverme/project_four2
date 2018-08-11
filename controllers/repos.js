require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var db = require('../models');

//testing with data
let ghrepos = [{name: 'app1234'}, {name: 'portfolio'}, {name: 'project3'}, {name: 'blogposts'}]

let project = {name: 'portfolio'}

router.get('/', function(req, res) {
  res.render('repos/all', {repos: ghrepos});
});

//testing with one project (data)
router.get('/:name', function(req, res) {
  res.render('repos/show', {repo: project})
});

module.exports = router;
