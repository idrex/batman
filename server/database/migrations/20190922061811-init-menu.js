"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("Menu", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      url: { type: STRING, allowNull: false, comment: "链接" },
      icon: { type: STRING, comment: "图标" },
      parent_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "父级ID"
      },
      sort: {
        type: INTEGER(4),
        allowNull: false,
        defaultValue: 99,
        comment: "排序"
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Menu");
  }
};
