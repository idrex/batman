import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import ManageLayout from '../layouts/ManageLayout';
import Login from '../layouts/Login';
import routerConfig from './config'

export default ({ history, app }) => {
  window.g_app = app;
  return (
    <Router history={history}>
      <Switch>
        <Route path="/manage/login" component={Login} />
        <Route path="/manage/*" render={props => <ManageLayout {...props} routerConfig={routerConfig} />} />
      </Switch>
    </Router>
  );
};