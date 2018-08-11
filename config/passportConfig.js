require('dotenv').config();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var db = require("../models");

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  }, (accessToken, refreshToken, profile, cb) => {
    // console.log('this is the access token:', accessToken);
    // console.log('refresh token', refreshToken);
    // console.log('see this profile:', profile);
    db.user.findOrCreate({
      where: {githubid: profile.id },
      defaults: {accesstoken: accessToken}
    }).spread(function(user, created) {
      // console.log(user, created);
      return cb(null, {githubid: profile.id, accesstoken: accessToken})
    })
  }
));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});

module.exports = passport
