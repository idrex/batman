import { Controller } from 'beidou';

export default class IndexController extends Controller {
  async show() {
    console.log(123);
    const { ctx } = this;
    const result = Date.now();
    ctx.body = result;
  }
}
