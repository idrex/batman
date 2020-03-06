import { message } from 'antd';
import store from 'store';
let lessNodesAppended;
const updateTheme = primaryColor => {
  const hideMessage = message.loading('正在编译主题！', 0);
  function buildIt() {
    if (!window.less) {
      return;
    }
    setTimeout(() => {
      window.less
        .modifyVars({
          '@primary-color': primaryColor,
          '@info-color': primaryColor,
          '@processing-color': primaryColor
        })
        .then(() => {
          hideMessage();
        })
        .catch(() => {
          message.error('Failed to update theme');
          hideMessage();
        });
    }, 200);
  }
  if (!lessNodesAppended) {
    // insert less.js and color.less
    const lessStyleNode = document.createElement('link');
    const lessConfigNode = document.createElement('script');
    const lessScriptNode = document.createElement('script');
    lessStyleNode.setAttribute('rel', 'stylesheet/less');
    lessStyleNode.setAttribute('href', '/build/color.less');
    lessConfigNode.innerHTML = `
      window.less = {
        async: true,
        env: 'production',
        javascriptEnabled: true
      };
    `;
    lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js';
    lessScriptNode.async = true;
    lessScriptNode.onload = () => {
      buildIt();
      lessScriptNode.onload = null;
    };
    document.body.appendChild(lessStyleNode);
    document.body.appendChild(lessConfigNode);
    document.body.appendChild(lessScriptNode);
    lessNodesAppended = true;
  } else {
    buildIt();
  }
};
export default {
  namespace: 'setting',
  state: {
    // 参考 https://prolayout.ant.design/
    navTheme: 'dark',// 导航菜单的主题 'light' | 'dark';
    primaryColor: '#1890ff',// 主题色
    layout: 'sidemenu',// 导航位置 `sidemenu` | `topmenu`
    contentWidth: 'Fluid',// 导航位置topmenu时，内容的布局才起作用`Fluid` | `Fixed`
    fixedHeader: true,// 是否固定 header 到顶部
    autoHideHeader: false,// 自动隐藏标题
    fixSiderbar: true,// 是否固定导航
    colorWeak: false,
    menu: {
      locale: true,
    },
    title: 'Batman System',
    pwa: false,
    iconfontUrl: '',
  },
  effects: {
    
  },
  reducers: {
    getSetting(state) {
      const primaryColor = store.get('primaryColor')
      if(primaryColor && (state.primaryColor !== primaryColor) ){
        updateTheme(primaryColor);
      }
      return {
        ...state
      } 
    },
    changeSetting(state, { payload }) {
      const { primaryColor } = payload
      if (state.primaryColor !== primaryColor) {
        updateTheme(primaryColor);
        store.set('primaryColor', primaryColor);
      }
      return {
        ...state,
        ...payload,
      }
    }
  },
  subscriptions: { 

  }
}
