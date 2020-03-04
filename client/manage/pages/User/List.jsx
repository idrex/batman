import React, { PureComponent, Fragment } from 'react';
import { Button, Card, Badge, Divider, Select , Tag , Modal, Popconfirm } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import StandardTable from '../../components/StandardTable';
import DisUserFrom from './DisUserFrom'
import styles from './index.module.less'
const statusMap = ['processing', 'error', 'success', 'warning'];
const status = ['待审核', '审核未通过', '启用', '禁止'];
const Option = Select.Option;
@connect(({ loading, user, role }) => ({
  loading: loading.models.user,
  query:user.query,
  visible:user.visible,
  role,
  user
}))
class UserList extends PureComponent {
  state = {
    selectedRows:[],
    userData:{}
  }
  columns = [
    {
      title: '用户名',
      dataIndex: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      render: (text, record) => (record.role&&record.role._id?<Tag color="#87d068">{record.role.name}</Tag>:<div>未分配角色</div>)
    },
    {
      title: '状态',
      dataIndex: 'status',
      filters: [
        {
          text: status[0],
          value: 0,
        },
        {
          text: status[1],
          value: 1,
        },
        {
          text: status[2],
          value: 2,
        },{
          text: status[3],
          value: 3
        }
      ],
      render(val) {
        return <Badge status={statusMap[val]} text={status[val]} />;
      },
    },
    {
      title: '操作',
      render: (text, record) => (
        record.status === 0 ? (
        <Fragment>
          <Popconfirm title="确定通过" okText="确定" cancelText="取消" onConfirm={()=> this.operating({...record, status:2 })}>
            <a href="#">通过</a>
          </Popconfirm>
          <Divider type="vertical" />
          <Popconfirm title="确定不通过" okText="确定" cancelText="取消" onConfirm={()=> this.operating({...record, status:1 })}>
            <a href="#">不通过</a>
          </Popconfirm>
          <Divider type="vertical" />
          <Popconfirm title="确定删除改用户" okText="确定" cancelText="取消" onConfirm={()=> this.delete({...record })}>
            <a href="#">删除</a>
          </Popconfirm>
        </Fragment>) : record.status === 1 ?(
        <Fragment>
          <Popconfirm title="确定通过" okText="确定" cancelText="取消" onConfirm={()=> this.operating({...record, status:2 })}>
            <a href="#">通过</a>
          </Popconfirm>
          <Divider type="vertical" />
          <Popconfirm title="确定删除改用户" okText="确定" cancelText="取消" onConfirm={()=> this.delete({...record })}>
            <a href="#">删除</a>
          </Popconfirm>
        </Fragment>
        ):record.status === 2 ?(
        <Fragment>
          <Popconfirm title="确定通过" okText="确定" cancelText="取消" onConfirm={()=> this.operating({...record, status:3 })}>
            <a href="#">禁止</a>
          </Popconfirm>
          <Divider type="vertical" />
          <a onClick={()=> this.distributionUser(record)}>分配角色</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除改用户" okText="确定" cancelText="取消" onConfirm={()=> this.delete({...record })}>
            <a href="#">删除</a>
          </Popconfirm>
        </Fragment>
        ):(
        <Fragment>
           <Popconfirm title="确定通过" okText="确定" cancelText="取消" onConfirm={()=> this.operating({...record, status:2 })}>
            <a href="#">启用</a>
          </Popconfirm>
          <Divider type="vertical" />
          <Popconfirm title="确定删除改用户" okText="确定" cancelText="取消" onConfirm={()=> this.delete({...record })}>
            <a href="#">删除</a>
          </Popconfirm>
        </Fragment>
        )
      )
    }
  ]
  componentDidMount(){
    const { dispatch, query } = this.props;
    dispatch({
      type: 'user/fetchList',
      payload: query
    })
    dispatch({
      type: 'role/fetchList',
      payload: {
        isPaging:false
      }
    })

  }
  // 操作
  operating = (record) => {
    const { dispatch, query } = this.props;
    dispatch({
      type: 'user/update',
      payload: {
        _id:record._id,
        status:record.status,
        query:query
      }
    })
  }
  // 删除用户
  delete = (record) => {
    const { dispatch, query} = this.props;
    dispatch({
      type: 'user/remove',
      payload:{
        _id:record._id,
        query:query
      }
    })
  }
  // 分配角色
  distributionUser = (record) =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'user/setModelVisible',
      payload:true
    })
    this.setState({
      userData:record
    })
  }
  // 
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { pageSize,current} = pagination
    let query = {
      pageSize:pageSize,
      current:current
    }
    let filter = {}
    // 过滤掉空筛选项
    Object.keys(filtersArg).map(item => {
      if(filtersArg[item].length>0){
        filter[item] = filtersArg[item]
      }
    })
    Object.assign(query,{filter:JSON.stringify(filter)})
    dispatch({
      type: 'user/fetchList',
      payload: query 
    })
    dispatch({
      type: 'user/setQuery',
      payload: query 
    })    
  }
  render () {
    const {
      loading,
      user:{data},
      visible,
      role
    } = this.props;
    const { selectedRows, userData } = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <StandardTable
                selectedRows={selectedRows}
                loading={loading}
                data={data}
                isRowSelection={false}
                columns={this.columns}
                onSelectRow={this.handleSelectRows}
                onChange={this.handleStandardTableChange}
              />
          </div>
        </Card>
        <Modal
          title='分配角色'
          visible={visible}
          footer={null}
          closable={false}
        >
          <DisUserFrom
            userData={ userData }
          />
        </Modal>
      </PageHeaderWrapper>
    )
  }
}

export default UserList