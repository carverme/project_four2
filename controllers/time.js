// require('dotenv').config();
// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const passport = require('../config/passportConfig.js');
// var db = require('../models');
const fs = require('fs');

//GET /time
router.get('/', (req, res) => {

})

//POST /time
router.post('/', (req, res) => {

})

//GET /time/new
router.get('/new', (req, res) => {
  res.render('time/new')
})







module.exports = router;
