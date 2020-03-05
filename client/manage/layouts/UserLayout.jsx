import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Layout} from 'antd';
import { Route, Switch } from 'dva/router';
import styles from './UserLayout.less';

class UserLayout extends React.PureComponent {
  render() {
    const { children, routerData } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* <Switch>
          {
            routerData.map(({path, component},index) => {
              return <Route path={path} key={index} exact component={component} />
            })  
          } 
        </Switch> */}
        <div className={styles.container}>
          {/* <div className={styles.lang}>
            <SelectLang />
          </div> */}
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" width='200' className={styles.logo} src='http://static.idrex.net/batman/qifei2.svg' />
                  <span className={styles.title}>Batman</span>
                </Link>
              </div>
              <div className={styles.desc}>Batman 简单内容管理系统</div>
            </div>
            {children}
          </div>
          {/* <DefaultFooter /> */}
        </div>
      </Layout>
    );
  }
}

export default UserLayout;
