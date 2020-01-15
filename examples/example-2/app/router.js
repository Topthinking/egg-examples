module.exports =  (app) => {
  const { controller, router, middleware } = app;
  router.get('/', middleware.userInfo, controller.home.index);
};
