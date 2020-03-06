export default (app) => {
  const { router, controller } = app;
  router.get('/api/manage/account', controller.manage.account);
  router.post('/api/manage/login', controller.manage.login);
  router.get('/home', controller.home.show);
  // router.get('/manage/api');
  router.get('manage', '/manage/*', controller.manage.index);
};
