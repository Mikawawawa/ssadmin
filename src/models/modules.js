import { queryModule, deleteModule, insertModule } from '../services/api';

export default {
  namespace: 'modules',

  state: {
    list: [],
    loading: false,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryModule, payload);
      yield put({
        type: 'refreshList',
        payload: response.data.systemModuleList,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *delete({ payload }, { put, call }) {
      yield call(deleteModule, payload);
    },
    *add({ payload }, { call }) {
      yield call(insertModule, payload);
    },
  },

  reducers: {
    refreshList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(aciton.payload),
      }
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
