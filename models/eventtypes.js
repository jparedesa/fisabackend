'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventTypes extends Model {
    static associate(models) {}
  };
  eventTypes.init({
    clEventType: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    event: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'eventTypes',
    timestamps: false,
    freezeTableName: true
  });
  return eventTypes;
};