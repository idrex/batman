import React from 'react';
import {
  Command,
  NodeMenu,
  CanvasMenu,
  ContextMenu,
} from 'gg-editor';
import styles from './index.module.less';
import iconfont from '../../styles/iconfont.module.less';

class MindContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu className={styles['context-menu']}>
        <NodeMenu>
          <Command name="append">
            <div className={styles.item}>
              <i className={`${iconfont['bi-icon']} ${iconfont['icon-insert-sibling']}`} />
              <span>插入同级</span>
            </div>
          </Command>
          <Command name="appendChild">
            <div className={styles.item}>
              <i className={`${iconfont['bi-icon']} ${iconfont['icon-insert-child']}`} />
              <span>插入子级</span>
            </div>
          </Command>
          <Command name="collapse">
            <div className={styles.item}>
              <i className={`${iconfont['bi-icon']} ${iconfont['icon-collapse-subtree']}`} />
              <span>折叠</span>
            </div>
          </Command>
          <Command name="expand">
            <div className={styles.item}>
              <i className={`${iconfont['bi-icon']} ${iconfont['icon-expand-subtree']}`} />
              <span>展开</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
              <span>删除</span>
            </div>
          </Command>
        </NodeMenu>
        <CanvasMenu>
          <Command name="undo">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-undo']}`} />
              <span>撤销</span>
            </div>
          </Command>
          <Command name="redo">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-redo']}`} />
              <span>重做</span>
            </div>
          </Command>
        </CanvasMenu>
      </ContextMenu>
    );
  }
}

export default MindContextMenu;
