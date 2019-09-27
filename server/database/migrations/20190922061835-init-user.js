"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, ENUM, BOOLEAN, JSON } = Sequelize;
    await queryInterface.createTable("User", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(80), allowNull: false, comment: "名称" },
      sex: {
        type: ENUM("1", "0"),
        defaultValue: "1",
        comment: "性别:男-1，女-0"
      },
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
    await queryInterface.dropTable("User");
  }
};
