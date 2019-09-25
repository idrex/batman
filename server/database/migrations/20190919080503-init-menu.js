'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('Menu', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(80),
      url: STRING,
      icon: STRING,
      parentId: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Menu');
  },
};
