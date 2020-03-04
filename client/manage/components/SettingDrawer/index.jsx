import React, { PureComponent } from 'react';
import { Drawer, Divider, Icon, Button, message } from 'antd';
import { connect } from 'dva';
import styles from './index.module.less';
import ThemeColor from './ThemeColor';

@connect(({ setting }) => ({ setting }))
class SettingDrawer extends PureComponent {
  state = {
    collapse: false,
  }
  togglerContent = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }
  changeSetting = (key, value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'setting/changeSetting',
      payload: {
        primaryColor: value
      }
    });
  }
  render() {
    const { setting } = this.props;
    const { navTheme, primaryColor, layout } = setting;
    const { collapse } = this.state;
    return (
      <Drawer
        visible={collapse}
        width={300}
        onClose={this.togglerContent}
        placement="right"
        handler={
          <div className={styles.handle}>
            <Icon
              type={collapse ? 'close' : 'setting'}
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            />
          </div>
        }
        onHandleClick={this.togglerContent}
        style={{
          zIndex: 999,
        }}
      >
        <div className={styles.content}>
          <ThemeColor
            title='主题色'
            value={primaryColor}
            onChange={color => this.changeSetting('primaryColor', color)}
          />
          <Divider />
        </div>
      </Drawer>
    );
  }
}

export default SettingDrawer;
