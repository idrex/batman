import React, { PureComponent } from 'react';
import { Menu/*, Icon*/ } from 'antd';
import classNames from 'classnames';
import { Link, withRouter} from 'dva/router';
import styles from './index.module.less';
const SubMenu = Menu.SubMenu;

// const getIcon = (icon) => {
//   if (typeof icon === 'string' && icon.indexOf('http') === 0) {
//     return <img src={icon} alt="icon" className="icon sider-menu-item-img" />;
//   }
//   if (typeof icon === 'string') {
//     return <Icon type={icon} />;
//   }
//   return icon;
// };
class BaseMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = (menusData) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map((item) => {
        // make dom
        const ItemDom = this.getSubMenuOrItem(item);
        return ItemDom;
      })
      .filter(item => item);
  }
  getSubMenuOrItem = (item) => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {/* {getIcon(item.icon)} */}
                  <span className="menu-name">{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      if (item.auth === 0) {
        return null;
      }
      return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
    }
  }
  // 转化路径
  conversionPath = (path) => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  };
  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  getMenuItemPath = (item) => {
    const itemPath = this.conversionPath(item.path);
    // const icon = getIcon(item.icon);
    const { target, name } = item;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {/* {icon} */}
          <span className="menu-name">{name}</span>
        </a>
      );
    }
    const { location, isMobile, onCollapse } = this.props;
    
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === location.pathname}
        onClick={
          isMobile
            ? () => {
              onCollapse(true);
            }
            : undefined
        }
      >
        {icon}
        <span className="menu-name">{name}</span>
      </Link>
    )
  }
  render() {
    const { openKeys, selectedKeys, theme, style,handleOpenChange,menuData} = this.props;
    return (
        <Menu
          theme={theme}
          mode="inline"
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
          style={style}
          selectedKeys={selectedKeys}
        >
          {this.getNavMenuItems(menuData)}
        </Menu>
    );
  }
}
export default withRouter(BaseMenu)