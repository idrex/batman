# batman-services



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 数据库设置

```bash
# 创建迁移文件
$ npx sequelize migration:generate --name=init-menu
# 升级数据库
$ npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
$ npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
$ npx sequelize db:migrate:undo:all

# 创建种子文件
$ npx sequelize seed:generate --name default-menu
# 迁移种子文件
$ npx sequelize db:seed:all
# 撤销最近种子文件
$ npx sequelize db:seed:undo
# 如果你想撤消特定的种子
$ npx sequelize db:seed:undo --seed default-menu
# 如果你想撤消所有的种子
$ npx sequelize db:seed:undo:all
# 参考：https://demopark.github.io/sequelize-docs-Zh-CN/
```

[egg]: https://eggjs.org