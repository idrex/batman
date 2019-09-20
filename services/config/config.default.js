'use strict';

/**
 * 默认配置
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568876092633_3549';


  // 中间件
  config.middleware = [ 'errorHandler' ];

  // 数据库ORM
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'root3306',
    port: 3306,
    database: 'batman_dev',
    define: {
      freezeTableName: true,
    },
  };

  // 安全设置
  config.security = {
    csrf: {
      enable: false,
    },
    methodnoallow: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8000', 'http://localhost:8001', 'http://saas.idrex.net', 'http://uat.idrex.net' ],
  };

  // 跨域设置
  config.cors = {
    allowMetbods: 'GET,HEAD,POST,PUT,DELETE,OPTIONS',
    credentials: true,
  };

  // 加密插件
  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  // // 鉴权 json web token
  // config.jwt = {
  //   secret: 'idrex',
  //   enable: true, // default is false
  //   match: '/jwt', // optional
  // };

  // // 微信支付
  // config.wechatPay = {
  //   client: {
  //     // Optional,
  //     bodyPrefix: '一方故里',
  //     appId: 'wx97ac871303fc5158',
  //     merchantId: '1501916641',
  //     secret: 'f3d01b4ab4db54e0289f91bff15dd68c',
  //     notifyUrl: 'https://api.yifangguli.com/',
  //     // pfx: fs.readFileSync('./apiclient_cert.p12'),
  //   },
  // };

  // // 阿里云OSS
  // config.oss = {
  //   clients: {
  //     image: {
  //       bucket: 'yfgl-image',
  //     },
  //     video: {
  //       bucket: 'yfgl-video',
  //     },
  //   },
  //   default: {
  //     endpoint: 'oss-cn-beijing.aliyuncs.com',
  //     accessKeyId: 'LTAIpYIVpbX7ZHMA',
  //     accessKeySecret: 'RaKw1AED80zgyfTUSR1UsOBoryy60s',
  //   },
  // };

  // // 阿里云Node
  // config.alinode = {
  //   server: 'wss://agentserver.node.aliyun.com:8080',
  //   appid: '41828',
  //   secret: 'ac53c4496e79e8aec4dea1cc748f43771c063d2b',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
