import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Layout} from 'antd';
import { Route, Switch } from 'dva/router';
class UserLayout extends React.PureComponent {
  render() {
    const { children, routerData } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        123123
        <Switch>
          {
            routerData.map(({path, component},index) => {
              return <Route path={path} key={index} exact component={component} />
            })  
          } 
        </Switch>
      </Layout>
    );
  }
}

export default UserLayout;
