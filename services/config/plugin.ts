import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 数据ORM框架
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // // 验证
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },

  // // 加密
  // bcrypt: {
  //   enable: true,
  //   package: 'egg-bcrypt',
  // },

  // 鉴权 json web token
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  // // CORS跨域
  // cors: {
  //   enable: true,
  //   package: 'egg-cors',
  // },

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

export default plugin;
