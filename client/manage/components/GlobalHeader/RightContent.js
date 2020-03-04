import React, { PureComponent } from 'react';
import { Spin, Tag, Menu, /*Icon,*/ Dropdown, Avatar, Tooltip } from 'antd';
import HeaderSearch from '../HeaderSearch';
import styles from './index.module.less';

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const {
      theme,
      currentUser,
      onMenuClick
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          {/* <Icon type="user" /> */}
          <span>account center</span>
        </Menu.Item>
        <Menu.Item key="userinfo">
          {/* <Icon type="setting" /> */}
          <span>account settings</span>
        </Menu.Item>
        <Menu.Item key="triggerError">
          {/* <Icon type="close-circle" /> */}
          <span>Trigger Error</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          {/* <Icon type="logout" /> */}
          <span>logout</span>
        </Menu.Item>
      </Menu>
    );
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder='输入。。。。'
          // dataSource={}
          onSearch={value => {
            // console.log('input', value); // eslint-disable-line
          }}
          onPressEnter={value => {
            // console.log('enter', value); // eslint-disable-line
          }}
        />
        <Tooltip title="帮助文档">
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className={styles.action}
          >
            {/* <Icon type="question-circle-o" /> */}
          </a>
        </Tooltip>
        {currentUser.email ? (
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={currentUser.avatar}
                alt="avatar"
              />
              <span className={styles.name}>{currentUser.email}</span>
            </span>
          </Dropdown>
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )}
      </div>
    );
  }
}
