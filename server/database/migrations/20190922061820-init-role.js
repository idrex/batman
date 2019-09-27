"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, JSON } = Sequelize;
    await queryInterface.createTable("Role", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      menus: { type: JSON, allowNull: false, comment: "菜单树" }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Role");
  }
};
