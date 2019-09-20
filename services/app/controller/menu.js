'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  /**
   * 菜单列表
   * @class
   * @param {number} page - 当前页数
   * @param {number} size - 返回条数
   * @return 
   */
  async index() {
    const ctx = this.ctx;
    const { model, query: { size = 10, page = 1 }, helper: { toInt, success } } = ctx;
    const query = { limit: toInt(size), offset: (toInt(page) - 1) * toInt(size) };
    const res = await model.Menu.findAndCountAll(query);
    res.size = toInt(size);
    res.page = toInt(page);
    success({ ctx, res });
  }
  // async index() {
  //   const ctx = this.ctx;
  //   const query = { limit: ctx.helper.toInt(ctx.query.limit), offset: ctx.helper.toInt(ctx.query.offset) };
  //   ctx.body = await ctx.model.Menu.findAll(query);
  // }

  /**
   * 菜单详情
   * @class
   * @param {number} id - 数据ID
   */
  async show() {
    const ctx = this.ctx;
    const { model, params, helper: { toInt, success } } = ctx;
    const res = await model.Menu.findByPk(toInt(params.id));
    success({ ctx, res });
  }

  /**
   * 新增菜单
   * @param {object} body - 数据
   */
  async create() {
    const ctx = this.ctx;
    const { model, request: { body }, helper: { success } } = ctx;
    const { name, url, icon, parentId = 0 } = body;
    const res = await model.Menu.create({ name, url, icon, parentId });
    ctx.status = 201;
    success({ ctx, res });
  }

  /**
   * 编辑菜单
   * @param {object} body - 数据
   */
  async update() {
    const ctx = this.ctx;
    const { model, params: { id }, request: { body }, helper: { toInt, success } } = ctx;
    const menu = await model.Menu.findByPk(toInt(id));
    if (!menu) {
      ctx.status = 410;
      return;
    }
    const res = await menu.update(body);
    success({ ctx, res });
  }

  /**
   * 删除菜单
   * @param {number} id - 数据ID
   */
  async destroy() {
    const ctx = this.ctx;
    const { model, params: { id }, helper: { toInt, success } } = ctx;
    const menu = await model.Menu.findByPk(toInt(id));
    if (!menu) {
      ctx.status = 410;
      return;
    }
    const res = await menu.destroy();
    success({ ctx, res });
  }
}

module.exports = MenuController;
