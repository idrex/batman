// 'use strict';
// const path = require('path');
// const webpack = require('webpack');
import path from 'path'
import webpack from 'webpack'
import AntDesignThemePlugin from 'antd-theme-webpack-plugin'
// const copyWebpackPlugin = require('copy-webpack-plugin');
// const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const options = { 
  antDir:path.join(__dirname,'../node_modules/antd'),
  stylesDir:path.join(__dirname,'../client/manage/styles/'),
  varFile:path.join(__dirname,'../client/manage/styles/vars.less'),
  mainLessFile:path.join(__dirname, '../client/manage/styles/main.less'),
  themeVariables:['@primary-color','@info-color','@processing-color'],
  indexFileName:'index.html',
  generateOnce: true
} 
const themePlugin = new AntDesignThemePlugin(options)
module.exports = (app, defaultConfig  , dev ) => {
  const babelLoader = defaultConfig.module.rules[0];  
  for (const loader of defaultConfig.module.rules) {
    if (loader.test.test('.jsx') && loader.test.test('.js')) {
      if (!Array.isArray(loader.use.options.plugins)) {
        loader.use.options.plugins = [];
      }
      loader.use.options.plugins.push(
        require.resolve('babel-plugin-transform-decorators-legacy')
      );
      break;
    }
  }
  defaultConfig.resolve= {
    ...defaultConfig.resolve,
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      // '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../client/icon/icons.js'),
      '@':path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/manage/components'),
      assets: path.join(__dirname, '../client/manage/assets'),
      utils: path.join(__dirname, '../client/manage/utils'),
      layouts: path.join(__dirname, '../client/manage/layouts'),
      models: path.join(__dirname, '../client/manage/models'),
      services: path.join(__dirname, '../client/manage/services'),
      pages:  path.join(__dirname, '../client/manage/pages'),
      router:  path.join(__dirname, '../client/manage/routers')
    }
  }
  babelLoader.use.options.babelrc = true;
  defaultConfig.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  defaultConfig.plugins.push(themePlugin)
  // defaultConfig.plugins.push(new BundleAnalyzerPlugin())
  return defaultConfig;
};

