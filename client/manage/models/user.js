//用户模块

//获取用户列表
import { getUserList, updateUser, removeUser, createUser} from '../services/user';
export default {
  namespace: 'user',

  state: {
    data: {},
    currentUser:{},
    visible:false,
    query:{
      pageSize:10,
      current:1
    }
  },

  effects: {
    *create({ payload }, { call, put }) {
      const response = yield call(createUser, payload);
    },
    *fetchList({ payload }, { call, put }) {
      const response = yield call(getUserList, payload);
      if(response.code === 0){
        yield put({
          type: 'queryList',
          payload: response 
        })
      }
    },
    *remove({ payload }, { call, put }) {
      const res =  yield call(removeUser, payload);
      if(res.code === 0){
        const response = yield call(getUserList, payload.query)
        if(response.code === 0){
          yield put({
            type: 'queryList',
            payload: response 
          })
        }
      }
    },
    *update({ payload }, { call, put }) {
      const res = yield call(updateUser, payload);
      if(res.code === 0){
        yield put({
          type: 'setModelVisible',
          payload: false 
        })
        const response = yield call(getUserList, payload.query);
        if(response.code === 0){
          yield put({
            type: 'queryList',
            payload: response 
          })
        }
      }
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data:action.payload.data,
      };
    },
    setModelVisible(state, action){
      return {
        ...state,
        visible:action.payload
      }
    },
    setQuery(state, action){
      return {
        ...state,
        query:action.payload
      }
    },
  },

  subscriptions: {
    
  },
};
