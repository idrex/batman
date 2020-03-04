// import 'babel-polyfill';
import React from 'react';
import dva from 'dva';
import { memoryHistory } from 'dva/router';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import Routers from './pages/router';
import './index.less'
function createApp(opts) {
  const app = dva(opts);
  // app.model(require('./models/global').default);
  // app.model(require('./models/setting').default);
  // app.model(require('./models/logger').default);
  // app.model(require('./models/account').default);
  app.use(createLoading());
  app.router(Routers);
  return app;
}

export default class Index extends React.Component {
  static getPartial() {
    console.log(123123);
    let app = createApp({
      history: memoryHistory,
      initialState: {
        
      },
    });
    return {
      html: app.start()()
    };
  }
  static doctype = '<!DOCTYPE html>';

  render() {
    const { html, helper } = this.props;
    const { version } = helper.config.pkg
    return (
      <html>
        <head>
          <title>Batman Manage</title>
          <link rel="stylesheet" href={helper.asset('manage.css')} /> 
        </head>
        <body>
          <link rel="stylesheet/less" type="text/css" href={helper.asset('color.less')}/>
          <script dangerouslySetInnerHTML={{ __html: `window.less={async: true,env: 'production', javascriptEnabled: true};` }} />
          <script type="text/javascript" src="https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js"></script>
          <div id="manage" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset(`manifest.js?v=${version}`)} />
          <script src={helper.asset(`manage.js?v=${version}`)} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const app = createApp({
    history: createHistory(),
    initialState: {},
  });
  // 5. Start
  app.start('#manage');
  // if (module.hot) {
  //   module.hot.accept((err) => { // 地址参数可以省去
  //     if (err) {
  //       console.error('Cannot apply hot update', err);
  //     }
  //     ReactDOM.render(app, document.getElementById('container'));
  //   });
  // }
}

