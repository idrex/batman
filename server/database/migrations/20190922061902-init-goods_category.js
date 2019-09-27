"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT, DATE } = Sequelize;
    await queryInterface.createTable("GoodsCategory", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      admin_id: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: "Admin",
          key: "id"
        },
        comment: "管理员ID"
      },
      parent_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "父级ID"
      },
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      sub_name: { type: STRING, comment: "副名称" },
      images: { type: STRING, comment: "图片" },
      content: { type: TEXT, comment: "内容" },
      sort: { type: INTEGER(4), defaultValue: 99, comment: "排序" },
      create_time: { type: DATE, allowNull: false, comment: "创建时间" },
      update_time: { type: DATE, allowNull: false, comment: "更新时间" }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("GoodsCategory");
  }
};
