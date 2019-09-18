# batman-services

## 规范说明

- `controller` 对应接口目录
- `model` 相关数据表操作
- `service` 复杂关系处理

### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### 部署

```bash
$ npm run tsc
$ npm start
```

### 数据部署及迁移
```bash
# 创建数据库
$ mysql -u root -e 'CREATE DATABASE IF NOT EXISTS `batman-dev`;'
# 升级数据库
$ npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
$ npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
$ npx sequelize db:migrate:undo:all
```

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### 依赖

- Node.js 8.x
- Typescript 3.1+
