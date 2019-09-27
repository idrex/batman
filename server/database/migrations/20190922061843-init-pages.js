'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('Pages', {
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
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      sub_name: { type: STRING, comment: "副名称" },
      description: { type: STRING, comment: "描述" },
      images: { type: STRING, comment: "图片" },
      status: {
        type: BOOLEAN,
        defaultValue: true,
        comment: "状态：显示or隐藏"
      },
      content: { type: TEXT, comment: "内容" },
      sort: { type: INTEGER(4), defaultValue: 99, comment: "排序" },
      create_time: { type: DATE, allowNull: false, comment: "创建时间" },
      update_time: { type: DATE, allowNull: false, comment: "更新时间" }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pages');
  },
};
