'use strict';

const path = require('path');

module.exports = appInfo => ({
  keys: 'secrets',
  view: {
    useHashAsset: true,
  },
  react: {
    static: true,
  },
  webpack: {
    custom: {
      configPath: path.resolve(__dirname, './webpack.config.js'),
    }
  },
  isomorphic: {
    babel: {
      plugins: [
        require.resolve('babel-plugin-dynamic-import-node'),
        require.resolve('babel-plugin-transform-decorators-legacy'),
        [require.resolve('babel-plugin-import-inspector'), {
          serverSideRequirePath: true,
        }],
        // [
        //   require.resolve('babel-plugin-import'),
        //   { libraryName: 'antd', libraryDirectory: 'es', style: true },
        // ]
      ],
      extensions: ['.js', '.jsx', '.mjs'],
    },
  },
  static: {
    dir: [
      {
        prefix: '/public',
        dir: path.join(appInfo.baseDir, '/app/public'),
      },
      {
        prefix: '/build',
        dir: path.join(appInfo.baseDir, '/build'),
      },
    ],
  },
});
