import React, { PureComponent } from 'react';
import {
  Drawer,Table,Avatar,Card,Tag 
} from 'antd';
import DescriptionList from '../DescriptionList';
const { Description } = DescriptionList;
export default class DrawerDetail extends PureComponent {
  state={
    visible:false
  }
  columns = [{
    title: '用户头像',
    dataIndex: 'avatar',
    key: 'avatar',
    render:  (text, record) => (<Avatar src={record.user.avatar} />)
  },{
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    render:  (text, record) => (<div>{record.user.email}</div>)
  }, {
    title: '操作',
    dataIndex: 'status',
    key: 'status',
    render:  (text, record) => (record.status === 0? <Tag color="#2db7f5">新增</Tag>: record.status === 1?<Tag color="#f50">删除</Tag>:<Tag color="#87d068">修改</Tag>)
  }, {
    title: '时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  }]
  static getDerivedStateFromProps(props, state) {
    const { visible } = state;
    if (props.visible !== visible) {
      return {
        visible: props.visible
      };
    }
    return null;
  }
  onClose = () =>{
    // this.setState({
    //   visible:false
    // })
    this.props.onClose()
  }
  render(){
    const { visible } = this.state
    const { detailData,loggerData } = this.props
    return (
      <Drawer
        width={800}
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={visible}
      >
        <Card title="基础数据" style={{ marginBottom: 24 }} bordered={false}>
          <DescriptionList style={{ marginBottom: 24 }} col={2}>
            {
              detailData.map((item,index)=>
                <Description key={index} term={item.term}>{item.title}</Description>
              )
            }
          </DescriptionList>
        </Card>
        <Card title="操作日志" style={{ marginBottom: 24 }} bordered={false}>
          <Table columns={this.columns} dataSource={loggerData.list} rowKey='_id' pagination={false}/>
        </Card>
      </Drawer>
    )
  }

}