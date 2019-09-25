'use strict';

module.exports = app => {
  const { INTEGER, BIGINT, FLOAT, DOUBLE, DECIMAL, STRING, TEXT, DATE, DATEONLY, BOOLEAN, ENUM, JSON, GEOMETRY } = app.Sequelize;

  const Menu = app.model.define('Type', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    ints: INTEGER(2),
    bigint: BIGINT,
    bigint11: BIGINT(11),
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
    tiny: TEXT('tiny'),
    date: DATE,
    date6: DATE(6),
    dateonly: DATEONLY,
    boolean: BOOLEAN,
    enum: ENUM('value 1', 'value 2'),
    json: JSON,
    geometry: GEOMETRY,
    point: GEOMETRY('POINT'),
    point4326: GEOMETRY('POINT', 4326),
  });

  return Menu;
};
