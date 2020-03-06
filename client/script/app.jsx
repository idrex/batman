import React from 'react';
import { hot } from 'react-hot-loader';
import { Layout, Calendar } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

/* eslint-disable no-alert */

const App = () => (
  <Layout>
    <Header>Header</Header>
    <Content>
      <Calendar />
      <div>
        <h1 className="title">Script</h1>
        <p>
          Scripting page template in `/client/script/index.jsx`, visit via url
          `/script`
        </p>
        <p>CSS file serves at `/build/script.css`</p>
        <p>JS file serves at `/build/script.js`</p>
        <hr />
        <button onClick={() => alert('it works!')}>click me</button>
      </div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default hot(module)(App);
