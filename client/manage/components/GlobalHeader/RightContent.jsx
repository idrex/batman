import { Tooltip, Tag } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { connect } from 'dva';
import Avatar from './AvatarDropdown';
// import SelectLang from '../SelectLang';
import styles from './index.less';
const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className='right'>
      <Tooltip title="网站首页">
        <a
          target="_blank"
          href="/"
          rel="noopener noreferrer"
          className='action'
        >
          <HomeOutlined />
        </a>
      </Tooltip>
      <Avatar />
      {/* {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )} */}
      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ setting }) => ({
  theme: setting.navTheme,
  layout: setting.layout,
}))(GlobalHeaderRight);
