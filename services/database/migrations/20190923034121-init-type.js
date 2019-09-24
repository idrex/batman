"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      FLOAT,
      DOUBLE,
      DECIMAL,
      STRING,
      TEXT,
      DATE,
      DATEONLY,
      BOOLEAN,
      ENUM,
      JSON,
      GEOMETRY,
      NOW
    } = Sequelize;
    await queryInterface.createTable("Type", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      ints: { type: INTEGER(2), allowNull: false, unique: true },
      bigint: {
        type: INTEGER,
        references: {
          model: "Menu",
          key: "id"
        },
        allowNull: false,
        comment: "这是备注"
      },
      float: FLOAT,
      float11: FLOAT(11),
      float1110: FLOAT(11, 2),
      // double: DOUBLE,
      // doublet: DOUBLE(11),
      doubles: DOUBLE(11, 2),
      decimal: DECIMAL,
      decimals: DECIMAL(10, 2),
      strings: STRING(80),
      string: STRING,
      binary: STRING.BINARY,
      text: TEXT,
      tiny: TEXT("tiny"),
      medium: TEXT("medium"),
      date: DATE,
      date6: DATE(6),
      dateonly: DATEONLY,
      boolean: BOOLEAN,
      enum: ENUM("value 1", "value 2"),
      json: JSON,
      geometry: GEOMETRY,
      point: GEOMETRY("POINT"),
      point4326: GEOMETRY("POINT", 4326),
      createdAt: { type: DATE, defaultValue: NOW },
      updatedAt: { type: DATE, defaultValue: NOW }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Type");
  }
};
