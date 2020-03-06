export default {
  namespace: 'systemUser',
  state: {
    list: {},
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      const response = yield call(getUserList, payload);
      if(response.code === 0){
        yield put({
          type: 'queryList',
          payload: response 
        })
      }
    },
  },

  reducers: {
    set(state, action) {
      return {
        ...state,
        data:action.payload.data,
      };
    },
  },
};
