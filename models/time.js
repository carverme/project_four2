'use strict';
module.exports = (sequelize, DataTypes) => {
  var time = sequelize.define('time', {
    minute: DataTypes.INTEGER,
    totalmins: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    repoid: DataTypes.INTEGER,
    reponame: DataTypes.STRING
  }, {});
  time.associate = function(models) {
    models.time.belongsTo(models.user);
  };
  return time;
};
