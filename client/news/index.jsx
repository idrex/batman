import React from 'react';
import ReactDOM from 'react-dom';
import Appss from './app';
import './index.less';

/**
 * custom view template
 *
 * @export
 * @class View
 * @extends {React.Component}
 */
export default class View extends React.Component {
  static getPartial() {
    return {
      html: <Appss />,
    };
  }

  render() {
    const { helper, html } = this.props;
    return (
      <html>
        <head>
          <title>Scriptzxcv</title>
          <link rel="stylesheet" href={helper.asset('news.css')} />
        </head>
        <body>
          <div id="rootsssss" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('news.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  ReactDOM.hydrate(<Appss />, document.getElementById('rootsssss'));
}
