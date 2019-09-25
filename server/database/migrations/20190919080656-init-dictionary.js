'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('Dictionary', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      key: STRING(80),
      name: STRING,
      parent: STRING(80),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dictionary');
  },
};
