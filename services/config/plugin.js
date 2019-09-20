'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 验证
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  
  // 加密
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt',
  },

  // 数据库ORM
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // // 鉴权 json web token
  // jwt: {
  //   enable: true,
  //   package: 'egg-jwt',
  // },

  // CORS跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  // // 微信支付
  // wechatPay: {
  //   enable: true,
  //   package: 'egg-wechat-pay',
  // },

  // // 阿里云OSS
  // oss: {
  //   enable: true,
  //   package: 'egg-oss',
  // },
  // // 阿里Node性能平台
  // alinode: {
  //   enable: true,
  //   package: 'egg-alinode',
  // },
};
