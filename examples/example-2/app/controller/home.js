
module.exports =  class HomeController extends require('egg').Controller {
  async index() {
    const { ctx } = this;
    console.log('model>>>', ctx.model.User);
    console.log('model-sequelize>>>', ctx.model.User.findByLogin);
    const a = await ctx.model.User.findByLogin(9);
    console.log(a);
    ctx.body = 'hello world';
  }
}
