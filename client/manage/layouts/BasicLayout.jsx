import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import SliderMenu from '../components/SliderMenu/SliderMenu'
import logo from '../assets/logo.svg';
import Header from './Header';
// import SettingDrawer from '../components/SettingDrawer'
import Exception403 from '../pages/Exception/403';
import Exception400 from '../pages/Exception/400';

const { Content, Footer } = Layout;
@connect(({ loading, account, global, setting }) => ({
  collapsed: global.collapsed,
  navTheme: setting.navTheme,
  fixedHeader: setting.fixedHeader,
  loading: loading.account,
  currentUser:account.currentUser,
  menu:account.menu,
  serverMenu:account.serverMenu,
  code:account.code,
  account
}))
class BasicLayout extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'account/fetchCurrent',
      payload: {}
    })
    dispatch({
      type: 'setting/getSetting'
    })
    
  }
  handleMenuCollapse = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !this.props.collapsed,
    })
  }
  getContentStyle = () => {
    const { fixedHeader } = this.props;
    return {
      margin: '24px 24px 0',
      paddingTop: fixedHeader ? 64 : 0,
      height:'100%'
    };
  }
  renderAuth(){
    const { currentUser, routerData, menu, code, serverMenu } = this.props;
    if(currentUser&&currentUser.userId===1000000){
      return (
        <Switch>
          <Redirect exact from="/" to="/auth/users" />
            {
              routerData.map(({path, component:Component,redirect},index) => {
                return <Route path={path} key={index} exact render={props => <Component {...props} auth={15} /> }  />    
              })  
          }
        </Switch>
      )
    }else if(code === 0 && menu.length===0){
      return <Exception400/>
    }else if(code===0&&menu.length>0){
      return (
        <Switch>
          <Redirect exact from="/" to={serverMenu[0].path} />
          {
            routerData.map(({path, component:Component,redirect},index) => {
              let findPath = serverMenu.find(item=>item.path === path)
              if(findPath){
                return <Route path={path} key={index} exact render={props => <Component {...props} auth={findPath.auth} /> }  />
              }else{
                return <Route path={path} key={index} exact component={Exception403} />
              }
              
            })  
          }
        </Switch>
      )
    }
  
  }
  render() {
    const {
      navTheme,
      collapsed,
      routerData,
      menu,
      serverMenu,
      currentUser,
      redirectData
    } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SliderMenu
          logo={logo}
          theme={navTheme}
          collapsed={collapsed}
          menuData={menu}
          onCollapse={this.handleMenuCollapse}
          {...this.props}
        />
        <Layout style={{
            background: '#f0f2f5',
            minHeight: '100vh',
          }}>
          <Header 
            currentUser={currentUser}
            handleMenuCollapse={this.handleMenuCollapse} 
            collapsed={collapsed}
            {...this.props}
         />
          <Content style={this.getContentStyle()}>
            {this.renderAuth()}
            {/* <SettingDrawer/> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
           SHORT-CHAIN ©2018 Created by IGOLA
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout

