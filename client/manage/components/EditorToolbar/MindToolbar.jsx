import React from 'react';
import { Tooltip, Divider } from 'antd';
import { Toolbar, Command } from 'gg-editor';
import styles from './index.module.less';
import iconfont from '../../styles/iconfont.module.less';

class FlowToolbar extends React.Component {
  render() {
    return (
      <Toolbar className={styles.toolbar}>
        <Command name="undo">
          <Tooltip title="撤销" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-undo']}`} />
          </Tooltip>
        </Command>
        <Command name="redo">
          <Tooltip title="重做" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-redo']}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="zoomIn">
          <Tooltip title="放大" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-zoom-in-o']}`} />
          </Tooltip>
        </Command>
        <Command name="zoomOut">
          <Tooltip title="缩小" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-zoom-out-o']}`} />
          </Tooltip>
        </Command>
        <Command name="autoZoom">
          <Tooltip title="适应画布" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-fit']}`} />
          </Tooltip>
        </Command>
        <Command name="resetZoom">
          <Tooltip title="实际尺寸" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-actual-size-o']}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="append">
          <Tooltip title="插入同级" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont['bi-icon']} ${iconfont['icon-insert-sibling']}`} />
          </Tooltip>
        </Command>
        <Command name="appendChild">
          <Tooltip title="插入子级" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont['bi-icon']} ${iconfont['icon-insert-child']}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="collapse">
          <Tooltip title="折叠" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont['bi-icon']} ${iconfont['icon-collapse-subtree']}`} />
          </Tooltip>
        </Command>
        <Command name="expand">
          <Tooltip title="展开" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont['bi-icon']} ${iconfont['icon-expand-subtree']}`} />
          </Tooltip>
        </Command>
      </Toolbar>
    );
  }
}

export default FlowToolbar;
