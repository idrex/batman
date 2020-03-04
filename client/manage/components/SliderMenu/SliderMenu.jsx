import React, { PureComponent } from 'react';
import { Layout  } from 'antd';
import classNames from 'classnames';
import { Link, withRouter} from 'dva/router';
import styles from './index.module.less';
import PageLoading from '../PageLoading';
import { geOpentMenuKeys, getSelectedMenuKeys } from './SiderMenuUtils';
import BaseMenu from './BaseMenu'
const { Sider } = Layout;
class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys:geOpentMenuKeys(props),
      selectedKeys:getSelectedMenuKeys(props)
    }
  }
  static getDerivedStateFromProps(props, state) {
    const { pathname } = state;
    if (props.location.pathname !== pathname) {
      return {
        pathname: props.location.pathname,
        openKeys: geOpentMenuKeys(props),
        selectedKeys:getSelectedMenuKeys(props)
      };
    }
    return null;
  }

  handleOpenChange = openKeys => {
    this.setState({
      openKeys: openKeys
    })
    // const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    // this.setState({
    //   openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    // });
  }

  render() {
    const { logo, collapsed, onCollapse, theme,fixSiderbar,location: { pathname },menuData} = this.props;
    let { openKeys, selectedKeys } = this.state;
    const siderClassName = classNames(styles.sider, {
      [styles.fixSiderbar]: fixSiderbar,
      [styles.light]: theme === 'light',
    });
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={256}
        theme={theme}
        className={siderClassName}
      >
        <div className={styles.logo} id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>IGOLA CMS</h1>
          </Link>
        </div>
        <BaseMenu
          theme={theme}
          menuData={menuData}
          handleOpenChange={this.handleOpenChange}
          openKeys={collapsed?[]:openKeys}
          style={{ padding: '16px 0', width: '100%' }}
          selectedKeys={collapsed?[]:selectedKeys}
        />
      </Sider>
    );
  }
}
export default withRouter(SiderMenu);