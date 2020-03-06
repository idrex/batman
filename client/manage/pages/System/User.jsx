import React from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd'

const User = (props) => {
  const { setting } = props;
  return (
    <PageHeaderWrapper content="欢迎使用">
      <Card title="用户中心">123123</Card>
      <Card title="用户中心">123123</Card>
    </PageHeaderWrapper>
  )
}

export default connect(({ setting }) => ({
  setting
}))(User)
