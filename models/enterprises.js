'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enterprises extends Model {
    static associate(models) {}
  };
  enterprises.init({
    clEnterprise: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      allowNull:false,
      type: DataTypes.STRING(60)
    },
    rfc: {
      allowNull:false,
      type: DataTypes.STRING(18),
      unique: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('0')
    }
  }, {
    sequelize,
    modelName: 'enterprises',
    freezeTableName: true,
    timestamps: false
  });
  return enterprises;
};