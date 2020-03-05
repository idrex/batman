import React from 'react';
import { Router, Route } from 'dva/router';
import ManageLayout from '../layouts/ManageLayout';

export default ({ history, app }) => {
  window.g_app = app;
  return (
    <Router history={history}>
      <Route path="/manage/" component={ManageLayout} />
    </Router>
  );
};