import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  router.get('/', middleware.userInfo, controller.home.index);
};
