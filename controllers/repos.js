require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var db = require('../models');

router.get('/', function(req, res) {
  res.render('repos/all');
});

module.exports = router;
