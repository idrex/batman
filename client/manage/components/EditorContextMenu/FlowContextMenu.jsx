import React from 'react';
import {
  Command,
  NodeMenu,
  EdgeMenu,
  GroupMenu,
  MultiMenu,
  CanvasMenu,
  ContextMenu,
} from 'gg-editor';
import styles from './index.module.less';
import iconfont from '../../styles/iconfont.module.less';

class FlowContextMenu extends React.Component {
  
  render() {
    return (
      <ContextMenu className={styles['context-menu']}>
        <NodeMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-copy-o']}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
              <span>删除</span>
            </div>
          </Command>
        </NodeMenu>
        <EdgeMenu>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
              <span>删除</span>
            </div>
          </Command>
        </EdgeMenu>
        <GroupMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-copy-o']}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
              <span>删除</span>
            </div>
          </Command>
          <Command name="unGroup">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-ungroup']}`} />
              <span>解组</span>
            </div>
          </Command>
        </GroupMenu>
        <MultiMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-copy-o']}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="paste">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-paster-o']}`} />
              <span>粘贴</span>
            </div>
          </Command>
          <Command name="addGroup">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-group']}`} />
              <span>成组</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-delete-o']}`} />
              <span>删除</span>
            </div>
          </Command>
        </MultiMenu>
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
          <Command name="pasteHere">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont['icon-paster-o']}`} />
              <span>粘贴</span>
            </div>
          </Command>
        </CanvasMenu>
      </ContextMenu>
    );
  }
}

export default FlowContextMenu;
