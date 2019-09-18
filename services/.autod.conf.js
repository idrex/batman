'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
  ],
  dep: [
    'egg',
    'egg-jwt',
    'egg-scripts',
    'egg-sequelize',
    'mysql2',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg-bin',
    'tslib',
    'typescript',
    'sequelize-cli',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
