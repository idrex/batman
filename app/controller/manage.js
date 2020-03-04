import { Controller } from 'beidou';

export default class ManageController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(123)
    await ctx.render('manage');
  }
}
