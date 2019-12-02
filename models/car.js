'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    name: Sequelize.STRING
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};