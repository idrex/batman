'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Menu = app.model.define('menu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(80),
    url: STRING,
    icon: STRING,
    parentId: INTEGER,
    createdAt: DATE,
    updatedAt: DATE,
  });

  return Menu;
};
