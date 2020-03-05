/**
 * 全局路由配置
 * 使用 react-loadable   Loadable.Map方式注册路由和model 
 */
import React from 'react';
import Loadable from 'react-loadable';
import {
  registerModel
} from "../utils/register";
import Loading from '../components/Loading';
export const loginRouter = [
  {
    path: '/user/login',
    name: 'login',
    component: (app) => Loadable.Map({
      loader: {
        Login: () => import('../pages/Login'),
      },
      delay: 200,
      timeout: 1000,
      loading: Loading,
      render(loaded, props) {
        const Login = loaded["Login"].default
        return <Login { ...props}/>
      }
    })
  // },{
  //   path: '/user/register',
  //   name: 'register',
  //   component: (app) => Loadable.Map({
  //     loader: {
  //       Register: () => import('../pages/User/Register'),
  //       user: () => import('../models/user')
  //     },
  //     delay: 200,
  //     timeout: 1000,
  //     loading: Loading,
  //     render(loaded, props) {
  //       const Register = loaded["Register"].default
  //       const user = loaded["user"].default
  //       registerModel(app, user)
  //       return <Register { ...props}/>
  //     }
  //   })
  }
]
export const routes = [
  {
    path: '/manage/users',
    name: 'users',
    component: (app) => Loadable.Map({
      loader: {
        List: () => import('../pages/User/List'),
        user: () => import('../models/user')
      },
      delay: 200,
      timeout: 1000,
      loading: Loading,
      render(loaded, props) {
        const List = loaded["List"].default
        const user = loaded["user"].default
        registerModel(app, user)
        return <List { ...props}/>
      }
    })
  // }, {
  //   path: '/auth/role',
  //   name: 'role',
  //   component: (app) => Loadable.Map({
  //     loader: {
  //       Role: () => import('../pages/Role/List'),
  //       role: () => import('../models/role')
  //     },
  //     delay: 200,
  //     timeout: 1000,
  //     loading: Loading,
  //     render(loaded, props) {
  //       const Role = loaded["Role"].default
  //       const role = loaded["role"].default
  //       registerModel(app, role)
  //       return <Role { ...props}/>
  //     }
  //   })
  // },
  // {
  //   path: '/chart/flow',
  //   name: 'flow',
  //   component: (app) => Loadable.Map({
  //     loader: {
  //       Flow: () => import('../pages/Flow')
  //     },
  //     delay: 200,
  //     timeout: 1000,
  //     loading: Loading,
  //     render(loaded, props) {
  //       const Flow = loaded["Flow"].default
  //       return <Flow { ...props}/>
  //     }
  //   })
  // }, {
  //   path: '/chart/mind',
  //   name: 'mind',
  //   component: (app) => Loadable.Map({
  //     loader: {
  //       Mind: () => import('../pages/Mind'),
  //     },
  //     delay: 200,
  //     timeout: 1000,
  //     loading: Loading,
  //     render(loaded, props) {
  //       const Mind = loaded["Mind"].default
  //       return <Mind { ...props}/>
  //     }
  //   })
  // },
  // {
  //   path: '/short-chain/list',
  //   name: 'shortchain',
  //   component: (app) => Loadable.Map({
  //     loader: {
  //       ShortChainList: () => import('../pages/ShortChain/List'),
  //       shortChain: () => import('../models/shortChain'),
  //     },
  //     delay: 200,
  //     timeout: 1000,
  //     loading: Loading,
  //     render(loaded, props) {
  //       const ShortChainList = loaded["ShortChainList"].default
  //       const shortChain = loaded["shortChain"].default
  //       registerModel(app, shortChain)
  //       return <ShortChainList { ...props}/>
  //     }
  //   })
  }
]

export const getRoutes = (app) => {
  return routes.map((route) => {
    if (route.component) {
      route.component = route.component(app);
    }
    return route;
  });

}

export const getLoginRoutes = (app) => {
  return loginRouter.map((route) => {
    if (route.component) {
      route.component = route.component(app);
    }
    return route;
  });

}