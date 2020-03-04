import React, { PureComponent } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { connect } from 'dva';
import styles from './index.module.less'
const FormItem = Form.Item;
const Option = Select.Option;
@connect(({ loading,role }) => ({
  submitting: loading.effects['role/submit'],
  query: role.query,
  role
}))
@Form.create()
class DisUserFrom extends PureComponent {
  componentDidMount(){
    const {
      form: { setFieldsValue },
      userData
    } = this.props; 
    setFieldsValue({
      email:userData.email,
      role:userData.role?userData.role._id:''
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, userData, query } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/update',
          payload:{
            ...userData,
            role:values.role,
            query:query
          }
        })
      }
    })
  }
  onCancel = () =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'user/setModelVisible',
      payload:false
    })
  }
  render () {
    const formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    }
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    const {
      form: { getFieldDecorator },
      submitting,
      role,
      userData
    } = this.props; 
    return (
          <Form onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem label="用户名" {...formLayout}>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入角色名' }],
                initialValue:''
              })(
                <Input />
              )}
            </FormItem>
     
            <FormItem label="角色" {...formLayout}>
              {getFieldDecorator('role', {
                rules: [{ required: true, message: '请选择角色名' }],
                initialValue:  ''
              })(
                <Select >
                  {
                    role.data.list.map((item,index)=>(
                      <Option value={item._id} key={index}>{item.name}</Option>
                    ))
                  }
                </Select>
              )}
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                保存
              </Button>
              <Button style={{ marginLeft: 32 }} onClick={this.onCancel}>
                取消
              </Button>
            </FormItem>
          </Form>
    )
  }
}

export default DisUserFrom