'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menu', [{
      name: '系统管理',
      url: '/system',
      icon: 'system',
      parentId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: '人员管理',
      url: '/admin',
      icon: 'system',
      parentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: '角色管理',
      url: '/role',
      icon: 'system',
      parentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: '菜单管理',
      url: '/menu',
      icon: 'system',
      parentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: '字典管理',
      url: '/dictionary',
      icon: 'system',
      parentId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menu', null, {});
  },
};
