'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    githubid: DataTypes.INTEGER,
    accesstoken: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};