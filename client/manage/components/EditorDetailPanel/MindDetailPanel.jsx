import React from 'react';
import { Card } from 'antd';
import {
  NodePanel,
  CanvasPanel,
  DetailPanel,
} from 'gg-editor';
import NodeDetail from '../NodeDetail';
import styles from './index.module.less';

class MindDetailPanel extends React.Component {
  render() {
    return (
      <DetailPanel className={styles['detail-panel']}>
        <NodePanel>
          <NodeDetail />
        </NodePanel>
        <CanvasPanel>
          <Card type="inner" title="画布属性" bordered={false} />
        </CanvasPanel>
      </DetailPanel>
    );
  }
}

export default MindDetailPanel;
