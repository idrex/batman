import { Controller } from 'beidou';

export default class ManageController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('manage');
  }
}
