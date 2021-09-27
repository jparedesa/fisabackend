'use strict';
const {
  Model, ENUM
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    static associate(models) {
      this.belongsTo(models.equipos, { foreignKey: 'equipo', as:'Equipo' });
      this.belongsTo(models.eventTypes, { foreignKey: 'event', as:'Event' })
    }
  };
  events.init({
    clEvent: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    source: {
      type: DataTypes.ENUM('W','D'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};