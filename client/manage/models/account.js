import { login, logout, getAccount} from '../services/account';
import { routerRedux } from 'dva/router';
import { setAuthority } from '../utils/authority';
import store from 'store';
export default {
  namespace: 'account',

  state: {
    info:{},// 用户信息
    role: '', //角色
    menu:[], // 菜单列表
    authorize:[] // 权限列表
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response  =  yield call(login, payload);
      if(response.code === 0){
        store.set('token', response.data.token);
        setAuthority(response.data.authority);
      }
      yield put(routerRedux.replace('/manage/home')); 
    },
    *logout({ payload }, { call, put }) {
      // const response  =  yield call(logout, payload);
      store.remove('token')
      yield put(routerRedux.replace('/manage/login'));
    },
    // 获取单前用户信息
    *fetchInfo({ payload }, { call, put }) {
      const response = yield call(getAccount);
      if(response.code === 0){
        yield put({
          type: 'saveInfo',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveInfo(state, { payload }) {
      // 添加其他处理逻辑
      return {
        ...state,
        menu: payload.menuData,
        info: payload || {},
      };
    },
  },

  subscriptions: {
    
  },
};
