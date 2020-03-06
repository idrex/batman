import React, { useEffect, Suspense } from 'react';
import { connect } from 'dva';
import { Link, Redirect, Route, Switch } from 'dva/router';
// import LazyComponents from './LazyComponents';
import ProLayout, { PageLoading } from '@ant-design/pro-layout';
import { SettingOutlined, AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';
import RightContent from '../components/GlobalHeader/RightContent';
import Footer from './Footer';
// import Authorized from '../utils/Authorized';

// 图标映射
const IconMap = {
  setting: <SettingOutlined />,
  appstore: <AppstoreOutlined />,
  desktop: <DesktopOutlined />,
};

/**
 * 菜单书籍渲染 
 * @param menuList 菜单列表
 */
const menuDataRender = (menuList) =>
  menuList.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon],
    children: children && menuDataRender(children),
  }));

/**
 * 路由渲染 
 * @param routerList 路由列表
 */
const routerDataRander = (routerList) => {
  const routerRander = []
  routerList.map(({ path, component, redirect, routes }, index) => {
    if (redirect) {
      // 重定向
      routerRander.push(<Redirect exact from={`/manage${path}`} to={`/manage${redirect}`} />)
    } else if (!routes) {
      // 只有一级目录
      routerRander.push(<Route path={`/manage${path}`} key={index} exact render={props => {
        const LazyComponent = React.lazy(component);
        return <Suspense fallback={<PageLoading />}><LazyComponent {...props} /></Suspense>
      }}/>)
    } else {
      // return <Route path={`/manage${path}`} key={index} >
      //   <Switch></Switch>
      routes.map(({ path: childrenPath, component: childrenComponent }, ChildrenIndex) => {
        // <Route path={childrenPath} key={ChildrenIndex} exact render={props => <ChildrenComponent {...props} />} />
        routerRander.push(<Route
          path={`/manage${childrenPath}`}
          key={ChildrenIndex}
          render={props => {
            const LazyComponent = React.lazy(childrenComponent);
            return <Suspense fallback={<PageLoading />}><LazyComponent {...props} /></Suspense>
          }}
        />)
      })
    }
  });
  console.log(routerRander);
  return routerRander;
}

const ManageLayout = (props) => {
  const { dispatch, children, collapsed, settings, userInfo, menuList, routerConfig } = props;
  console.log(props);

  // 获取当前用户信息
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'account/fetchInfo',
      });
    }
  }, []);

  // 切换折叠
  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  // 获取路由权限
  // const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
  //   authority: undefined,
  // };

  return (
    <ProLayout
      title='Batman Manage'
      logo='http://static.idrex.net/batman/qifei2.svg'
      collapsed={collapsed}
      onCollapse={handleMenuCollapse}
      // 渲染 logo 和 title
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      // 菜单数据及渲染
      menuDataRender={() => menuDataRender(menuList)}
      // menuRender={}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      // itemRender={(route, params, routes, paths) => {
      //   const first = routes.indexOf(route) === 0;
      //   return first ? (
      //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
      //   ) : (
      //     <span>{route.breadcrumbName}</span>
      //   );
      // }}
      breadcrumbRender={false}
      // route={menuList}
      rightContentRender={() => <RightContent />}
      footerRender={Footer}
      {...settings}
    >
      {/* <Authorized authority={authorized!.authority} noMatch={noMatch}> */}
        <Switch>
          {routerDataRander(routerConfig)}
        </Switch>
      {/* </Authorized> */}
    </ProLayout>
  )
}

export default connect(({ global, settings, account }) => ({
  collapsed: global.collapsed,// 折叠
  settings,
  userInfo: account.info,
  menuList: account.menu,
}))(ManageLayout);
