import React from 'react';
import { Tooltip, Icon } from 'antd';
import styles from './ThemeColor.module.less';

const Tag = ({ color, check, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);
const ThemeColor = ({ colors, title, value, onChange }) => {
  let colorList = colors;
  if (!colors) {
    colorList = [
      {
        key: 'dust',
        name: '薄暮',
        color: '#F5222D',
      },
      {
        key: 'volcano',
        name: '火山',
        color: '#FA541C',
      },
      {
        key: 'sunset',
        name: '日暮',
        color: '#FAAD14',
      },
      {
        key: 'cyan',
        name: '明青',
        color: '#13C2C2',
      },
      {
        key: 'green',
        name: '极光绿',
        color: '#52C41A',
      },
      {
        key: 'daybreak',
        name: '拂晓蓝（默认）',
        color: '#1890FF',
      },
      {
        key: 'geekblue',
        name: '极客蓝',
        color: '#2F54EB',
      },
      {
        key: 'purple',
        name: '酱紫',
        color: '#722ED1',
      },
    ];
  }
  return (
    <div className={styles.themeColor}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {colorList.map(({ key, color, name}) => (
          <Tooltip key={color} title={name}>
            <Tag
              className={styles.colorBlock}
              color={color}
              check={value === color}
              onClick={() => onChange && onChange(color)}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ThemeColor;
