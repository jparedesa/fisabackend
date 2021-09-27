'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('equipos', {
      clEquipo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deviceSerial: {
        allowNull: false,
        type: Sequelize.STRING(16),
        unique: true
      },
      alias: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      hardwareSerial: {
        allowNull: false,
        type: Sequelize.STRING(16),
        unique: true
      },
      wifiSerial: {
        allowNull: false,
        type: Sequelize.STRING(18),
        unique: true
      },
      activate: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        defaultValue: 0
      },
      enterprise:{
        type: Sequelize.INTEGER.UNSIGNED,
        references:{
          model: 'enterprises',
          key: 'clEnterprise'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('equipos');
  }
};