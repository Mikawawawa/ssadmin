import { queryActivities, queryFakeList, addSystemDevice, deleteSystemDevice, querySystemDevice, allocateActivityToDevice, allocateDeviceToManager, queryAllManager } from '../services/api';
import activities from './activities';

export default {
  namespace: 'device',

  state: {
    list: [],
    activities: [],
    mangers: [],
    loading: false,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *delete({ payload }, { put, call }) {
      yield call(deleteSystemDevice, payload);
    },
    *add({ payload }, { call }) {
      yield call(addSystemDevice, payload);
    },
    *allocateATD({ payload }, { call }) {
      yield call(allocateActivityToDevice, payload);
    },
    *allocateDTM({ payload }, { call }) {
      yield call(allocateDeviceToManager, payload);
    },
    *activities({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryActivities, payload);
      yield put({
        type: 'appendActivity',
        payload: Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *admins({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryAllManager, payload);
      yield put({
        type: 'appendAdmin',
        payload: Array.isArray(response) ? response : [],
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
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
        list: state.list.concat(action.payload),
      };
    },
    appendActivity(state, action) {
      return {
        ...state,
        activities: state.activities.concat(action.payload),
      };
    },
    appendAdmin(state, action) {
      return {
        ...state,
        mangers: state.mangers.concat(action.payload),
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
