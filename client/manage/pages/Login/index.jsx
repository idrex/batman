import React, { Component } from 'react';
import {  Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'dva';
const FormItem = Form.Item;
@connect(({ loading, account }) => ({
  loading: loading.models.account,
  account
}))
@Form.create()
class Login extends Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  handleFinish = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'account/login',
      payload: {
        ...values
      },
    })
  }

  render() {
    return (
      <div className="">
        <Form onFinish={this.handleFinish}>
          <FormItem name='email' rules={[{ required: true, message: '请输入邮箱地址!' }]}>
            <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱地址" />
          </FormItem>
          <FormItem name='password' rules={[{ required: true, message: '请输入密码!' }]}>
            <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Login
