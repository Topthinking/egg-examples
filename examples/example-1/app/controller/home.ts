import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log('model>>>', ctx.model.User);
    console.log('model-sequelize>>>', ctx.model.User.find);
    ctx.body = 'hello world';
  }
}
