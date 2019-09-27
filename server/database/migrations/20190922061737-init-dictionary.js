"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable("Dictionary", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      key: { type: STRING(80), allowNull: false, unique: true },
      value: { type: STRING, allowNull: false },
      parent_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "父级ID"
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Dictionary");
  }
};
