export default (app) => {
  const { router, controller } = app;
  router.get('/home', controller.home.show);
  router.get('manage', '/manage/*',controller.manage.index);
};
