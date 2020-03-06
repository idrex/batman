import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import {  Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from './Footer';
import style from './Login.less';

const FormItem = Form.Item;
const Login = props => {
  
  // 提交登陆
  const handleFinish = values => {
    console.log(values);
    const { dispatch } = props;
    dispatch({
      type: 'account/login',
      payload: {
        ...values
      },
    })
  }

  return (
    <div className="login">
      {/* <div className={styles.lang}>
        <SelectLang />
      </div> */}
      <div className="content">
        <div className="top">
          <div className="header">
            <Link to="/">
              <img alt="logo" className="logo" src="http://static.idrex.net/batman/qifei2.svg" />
              <span className="title">Batman Manage</span>
            </Link>
          </div>
          <div className="desc">东北地区首选管理系统</div>
        </div>
        <div className="box">
          <Form onFinish={handleFinish}>
            <FormItem name='email' rules={[{ required: true, message: '请输入邮箱地址!' }]}>
              <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱地址" />
            </FormItem>
            <FormItem name='password' rules={[{ required: true, message: '请输入密码!' }]}>
              <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default connect(({ settings }) => ({ ...settings }))(Login)
