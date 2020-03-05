import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import styles from './ManageLayout.less';
/**
 * 
 * @param menuList 菜单书籍渲染 
 */
// const menuDataRender = (menuList) =>
//   menuList.map(item => {
//     const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
//     return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//   });

const ManageLayout = (props) => {
  const { dispatch, children, collapsed, settings } = props;

  // 切换折叠
  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  return (
    <ProLayout
      logo='http://static.idrex.net/batman/qifei2.svg'
      collapsed={collapsed}
      onCollapse={handleMenuCollapse}
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      // menuItemRender={(menuItemProps, defaultDom) => {
      //   if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
      //     return defaultDom;
      //   }

      //   return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      // }}
      // menuDataRender={menuDataRender}
      // itemRender={(route, params, routes, paths) => {
      //   const first = routes.indexOf(route) === 0;
      //   return first ? (
      //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
      //   ) : (
      //     <span>{route.breadcrumbName}</span>
      //   );
      // }}
      // // rightContentRender={() => <RightContent />}
      // breadcrumbRender={(routers = []) => [
      //   {
      //     path: '/',
      //     breadcrumbName: '首页',
      //   },
      //   ...routers,
      // ]}
      footerRender={() => (<DefaultFooter
        copyright="2020 可视云技术部出品"
        links={[
          {
            key: 'Ant Design Pro',
            title: 'Ant Design Pro',
            href: 'https://pro.ant.design',
            blankTarget: true,
          },
          {
            key: 'github',
            title: 'Ant Design Pro Layout',
            href: 'https://prolayout.ant.design',
            blankTarget: true,
          },
          {
            key: 'Ant Design',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true,
          },
        ]}
      />)}
      {...settings}
    >
      {children}
    </ProLayout>
  )
}

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,// 折叠
  settings,
}))(ManageLayout);
