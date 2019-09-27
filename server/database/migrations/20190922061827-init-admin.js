"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable("Admin", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      role_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: "Role",
          key: "id"
        },
        comment: "角色ID"
      },
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      username: { type: STRING(80), allowNull: false, comment: "用户名" },
      password: { type: STRING, allowNull: false, comment: "密码" },
      email: { type: STRING, comment: "邮箱" },
      phone: { type: STRING, comment: "电话" },
      avatar: { type: STRING, comment: "头像" },
      status: {
        type: BOOLEAN,
        defaultValue: true,
        comment: "状态：启用or禁用"
      },
      create_time: { type: DATE, allowNull: false, comment: "创建时间" },
      update_time: { type: DATE, allowNull: false, comment: "更新时间" }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Admin");
  }
};
