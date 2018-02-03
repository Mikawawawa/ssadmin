import {
  queryProjectNotice,
  queryActivities,
  queryTemplate,
  queryModule,
  queryAllManager,
  deleteActivity,
  fakeChartData
} from '../services/api';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'workplace',

  state: {
    list: [],
    radarData: [],
    notice: [],
    projectLoading: true,
    activitiesLoading: true,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    * fetchList(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });

      const response = yield call(queryActivities);
      const { activityVOList } = response.data;

      yield put({
        type: 'saveList',
        payload: activityVOList,
      });

      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchNotice(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryProjectNotice);
      yield put({
        type: 'saveNotice',
        // payload: Array.isArray(response) ? response : [],
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        activityVOList: action.payload,
      };
    },
    saveNotice(state, action) {
      return {
        ...state,
        notice: action.payload,
      };
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    clear() {
      return {
        radarData: [],
      };
    },
  },
};
