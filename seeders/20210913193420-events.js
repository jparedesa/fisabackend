'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('eventTypes',[
      { clEventType: 1, event: 'Keep Alive 3 min' },
      { clEventType: 2, event: 'Conexión Internet' },
      { clEventType: 3, event: 'Mensaje Texto' },
      { clEventType: 4, event: 'Prueba Sonido' },
      { clEventType: 5, event: 'Alerta Sismica' },
      { clEventType: 6, event: 'Audio Personalizado' },
      { clEventType: 7, event: 'Simulacro' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('eventTypes', null, {});
  }
};
