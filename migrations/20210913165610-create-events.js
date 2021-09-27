'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      clEvent: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.ENUM('W','D'),
        allowNull: false
      },
      equipo:{
        type: Sequelize.STRING(16),
        references:{
          model: 'equipos',
          key: 'deviceSerial'
        }
      },
      event:{
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'eventTypes',
          key: 'clEventType'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};