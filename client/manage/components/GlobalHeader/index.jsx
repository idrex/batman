import React, { PureComponent } from 'react';
// import { Icon } from 'antd';
// import Debounce from 'lodash-decorators/debounce';
import styles from './index.module.less';
import RightContent from './RightContent';

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
   /* eslint-disable*/
  // @Debounce(600)
  triggerResizeEvent ()  {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed,currentUser } = this.props;
    return (
      <div className={styles.header}>
        {/* <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        /> */}
        <RightContent {...this.props}  currentUser={currentUser} />
      </div>
    );
  }
}
