'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('Ad', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ad');
  },
};