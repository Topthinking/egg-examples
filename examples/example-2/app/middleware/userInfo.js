module.exports =  async (ctx, next) => {
  console.log(123, ctx.path);
  await next();
};
