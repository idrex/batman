import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Animate from 'rc-animate';
import { connect } from 'dva';
import { Link } from 'dva/router';
import GlobalHeader from '../components/GlobalHeader';
import styles from './header.module.less';

const { Header } = Layout;

class HeaderView extends PureComponent {
  state = {
  
  }

  componentDidMount() {
    // document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.handScroll);
  }
  handleMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    if (key === 'logout') {
      dispatch({
        type: 'account/logout',
      });
    }
  }
  render() {
    const { handleMenuCollapse,collapsed,currentUser } = this.props;
    const HeaderDom = (
      <Header  style={{ padding: 0 }}>
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            collapsed={collapsed}
            onMenuClick={this.handleMenuClick}
            currentUser={currentUser}
          />
      </Header>
    )
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    );
  }
}

export default HeaderView
