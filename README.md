# batman

> 

## 开发

```bash
$ npm i
$ npm run start
$ open http://localhost:7001/
```

## 部署

```bash
$ npm run docker:build
$ npm run docker:run
```

## 结构

- client: Ant Design Pro
- server: Egg

```bash
.
├── client
│   ├── config                    # umi 配置，包含路由，构建等配置
│   │   ├── config.js
│   │   ├── defaultSettings.js
│   │   └── plugin.config.js
│   ├── dist                      # 部署文件
│   ├── mock                      # 本地模拟数据
│   ├── public
│   │   └── favicon.png           # Favicon
│   ├── src
│   │   ├── assets                # 本地静态资源
│   │   ├── components            # 业务通用组件
│   │   ├── e2e                   # 集成测试用例
│   │   ├── layouts               # 通用布局
│   │   ├── models                # 全局 dva model
│   │   ├── pages                 # 业务页面入口和常用模板
│   │   ├── services              # 后台接口服务
│   │   ├── utils                 # 工具库
│   │   ├── locales               # 国际化资源
│   │   ├── global.less           # 全局样式
│   │   └── global.ts             # 全局 JS
│   ├── tests                     # 测试工具
│   ├── README.md
│   └── package.json
├── server
│   ├── app                       # 应用
│   │   ├── controller            # 控制器
│   │   ├── extend                # 扩展方法
│   │   ├── midddleware           # 中间件
│   │   ├── model                 # 领域模型
│   │   ├── public                # 静态引用
│   │   ├── schedule              # 定时任务
│   │   ├── service               # 服务
│   │   ├── view                  # 视图
│   │   └── router.js             # 路由
│   ├── config                    # 配置
│   ├── database                  # 数据
│   ├── test                      # 测试
│   ├── Dockerfile                # Docker部署
│   ├── package.json
│   ├── tsconfig.json
│   └── tslint.json
├── package.json
├── README.md
└── vs.code-workspace
```
