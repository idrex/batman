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
            <i className={`${iconfont.iconfont} ${iconfont['icon-undo']}`}/>
          </Tooltip>
        </Command>
        <Command name="redo">
          <Tooltip title="重做" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-redo']}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="copy">
          <Tooltip title="复制" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-copy-o']}`} />
          </Tooltip>
        </Command>
        <Command name="paste">
          <Tooltip title="粘贴" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-paster-o']}`} />
          </Tooltip>
        </Command>
        <Command name="delete">
          <Tooltip title="删除" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
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
        <Command name="toBack">
          <Tooltip title="层级后置" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-to-back']}`} />
          </Tooltip>
        </Command>
        <Command name="toFront">
          <Tooltip title="层级前置" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-to-front']}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="multiSelect">
          <Tooltip title="多选" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-select']}`} />
          </Tooltip>
        </Command>
        <Command name="addGroup">
          <Tooltip title="成组" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-group']}`} />
          </Tooltip>
        </Command>
        <Command name="unGroup">
          <Tooltip title="解组" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont['icon-ungroup']}`} />
          </Tooltip>
        </Command>
      </Toolbar>
    );
  }
}

export default FlowToolbar;
