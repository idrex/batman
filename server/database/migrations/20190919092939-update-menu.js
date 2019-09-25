'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    const { STRING } = Sequelize;
    try {
      await queryInterface.addColumn('Menu', 'icon2', { type: STRING }, { transaction });
      await queryInterface.addColumn('Menu', 'icon3', { type: STRING }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Menu', 'icon2', { transaction });
      await queryInterface.removeColumn('Menu', 'icon3', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
