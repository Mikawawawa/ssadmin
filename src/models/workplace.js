import {
  queryProjectNotice,
  querySystemDevice,
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
    radarData: [],
    notice: [],
    list: [],
    projectLoading: true,
    activitiesLoading: true,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      const data = response.radarData;
      yield put({
        type: 'save',
        payload: data,
      });
    },
    * fetchList(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });

      const response = yield call(queryActivities);
      const list = response.data.activityVOList;

      yield put({
        type: 'saveList',
        payload: list,
      });

      yield put({
        type: 'changeLoading',
        payload: false,
      });
      yield put({
        type: 'changeActivityLoading',
        payload: false,
      });
    },
    *fetchNotice(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      let response = yield call(querySystemDevice);
      response = response.data ? response.data.deviceList : [];
      yield put({
        type: 'saveNotice',
        // payload: Array.isArray(response) ? response : [],
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
      yield put({
        type: 'changeProjectLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveNotice(state, action) {
      return {
        ...state,
        notice: action.payload,
      };
    },
    save(state, action) {
      return {
        ...state,
        radarData: action.payload,
      };
    },
    changeProjectLoading(state, action) {
      return {
        ...state,
        projectLoading: action.payload,
      };
    },
    changeActivityLoading(state, action) {
      return {
        ...state,
        activitiesLoading: action.payload,
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
        ...state,
        radarData: [],
      };
    },
  },
};
