'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enterprises', [{ name:'Digiser', rfc: 'RFCDIGISER' }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('enterprises', null, {});
  }
};
