import React from 'react';
import { routerRedux, Route, Switch, Redirect, Router  } from 'dva/router';
// import { LocaleProvider } from 'antd';
import store from 'store';
import BasicLayout from '../layouts/BasicLayout'
import ManageLayout from '../layouts/ManageLayout'
import UserLayout from '../layouts/UserLayout'
import {getRoutes, getLoginRoutes} from '../pages/router.config'
const { ConnectedRouter } = routerRedux;
// 登录验证
function requireAuth(Layout, props, routerData, redirectData) {
  const token = store.get('token');
  const {
    location: { pathname },
  } = props;
  if(token){
    return <Layout {...props} routerData={routerData} redirectData={redirectData} />
  }else{
    return <Redirect to="/manage/login" />
  }
}
const Routers = ({ history, app }) => {
  const {
    location: { pathname },
  } = history;
  const routeList = getRoutes(app);
  const loginRouterList  = getLoginRoutes(app)
  const routerData = routeList.filter(item=>item.redirect!==null)
  const redirectData = routeList.filter(item=>item.redirect)
  window.g_app = app 
  return (
    <Router history={history}>
      {/* <LocaleProvider locale={zh_CN}> */}
        <Switch>
          <Route path="/manage/login" render={props => <UserLayout {...props}  routerData={loginRouterList}/>} />
          <Route path="/manage/*" render={props => <ManageLayout {...props}/>} />
          {/* <Route path="/manage/*" render={props => requireAuth(ManageLayout, props, routerData, redirectData )} /> */}
          
        </Switch>
        {/* </LocaleProvider> */}
    </Router>
  );
};

export default Routers;
