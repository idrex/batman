import { login, logout, queryCurrent} from '../services/account';
import { routerRedux } from 'dva/router';
import store from 'store';
import { mergeSameArray } from '../utils/tools';
import menuData  from '../pages/menu';
export default {
  namespace: 'account',

  state: {
    currentUser:{
      role:{
        menu:[]
      }
    },
    code:-1, 
    menu:[], //左侧菜单列表
    serverMenu:[] //服务器返回权限列表
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response  =  yield call(login, payload);
      if(response.code === 0){
        store.set('token', response.data.token);
      }
      yield put(routerRedux.replace('/')); 
    },
    *logout({ payload }, { call, put }) {
      // const response  =  yield call(logout, payload);
      store.remove('token')
      yield put(routerRedux.replace('/'));
    },
    // 获取单前用户信息
    *fetchCurrent({ payload }, { call, put }) {
      const response = yield call(queryCurrent);
      if(response.code === 0){
        yield put({
          type: 'saveCurrentUser',
          payload: response,
        });
      }
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      const code = action.payload.code
      let matchMenu = []
      let serverMenu =[]
      if(action.payload.data.userId === 1000000){
        matchMenu = [...menuData]
      }else if(action.payload.data&&action.payload.data.role&&action.payload.data.role.menu){
        matchMenu =  mergeSameArray([...menuData],action.payload.data.role.menu)
        serverMenu = action.payload.data.role.menu||[]
      }
      
      return {
        ...state,
        menu:matchMenu,
        code:code,
        serverMenu,
        currentUser: action.payload.data || {},
      };
    },
  },

  subscriptions: {
    
  },
};
