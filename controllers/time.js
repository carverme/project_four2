require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('../config/passportConfig.js');
var db = require('../models');
const fs = require('fs');

// //GET /time
// router.get('/', (req, res) => {
//
// })

// //POST /time
// router.post('/:id', (req, res) => {
//   db..findOne({
//     where: {id: req.params.id}
//   }).then(function(time) {
//     time.createMinsLog({
//       minute: req.body.minute
//     }).then(function(data) {
//       console.log("HITTING /TIME //POST");
//       res.redirect('/show/' + user.id);
//     }).catch(function(err) {
//       console.log(err);
//     });
//   });
// });



// 
// //GET /time/new
// router.get('/new', (req, res) => {
//   res.render('time/new')
// })







module.exports = router;
