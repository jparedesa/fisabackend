'use strict';
const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipos extends Model {
    static associate(models) {
      this.belongsTo(models.enterprises, { foreignKey: 'enterprise', as: 'Enterprise' })
    }
  };
  equipos.init({
    clEquipo : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    deviceSerial: {
      allowNull: false,
      type: DataTypes.STRING(16),
      unique: true
    },
    alias: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    hardwareSerial: {
      allowNull: false,
      type: DataTypes.STRING(16),
      unique: true
    },
    wifiSerial: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true
    },
    activate: DataTypes.INTEGER(1).UNSIGNED,
  }, {
    hooks:{
      beforeCreate(user, options){
        
      }
    },
    sequelize,
    modelName: 'equipos',
  });

  equipos.getDevice = async(deviceSerie, hwSerie) => {
    console.log(equipos.associations)
    let response = await equipos.findOne({
      attributes: ['deviceSerial', 'activate', 'alias'],
      where:{
        deviceSerial: deviceSerie,
        hardwareSerial: hwSerie
      },
      include: [ equipos.associations.Enterprise ]
    });
    return response;
  }

  equipos.getDevicePerHwSerie = async( hwSerie, macSerie ) => {
    let device = await equipos.findOne({
      where:{
        [ Op.or ]: [ { hardwareSerial: hwSerie }, { wifiSerial: macSerie } ]
      }
    });
    return device;
  }

  equipos.registerDevice = async(hwSerie, macSerie, alias) => {
    let response = await equipos.create({
      hardwareSerial: hwSerie,
      wifiSerial: macSerie,
      alias: alias,
      activate: 1
    });
    return response;
  }

  return equipos;
};