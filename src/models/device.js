import {
  addSystemDevice,
  deleteSystemDevice,
  querySystemDevice,
  allocateActivityToDevice,
  allocateDeviceToManager,
  queryAllManager,
  queryActivities
} from '../services/api';
import { Select } from 'antd'
const Option = Select.Option
export default {
  namespace: 'device',

  state: {
    list: [],
    activities: [],
    managers: [],
    loading: false,
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(querySystemDevice, payload);
      yield put({
        type: 'refreshList',
        payload: response.data.deviceList,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *delete({ payload }, { put, call }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield call(deleteSystemDevice, payload);
      yield put({
        type: 'refreshList',
        payload: response.data.deviceList,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *add({ payload }, { call }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield call(addSystemDevice, payload);
      yield put({
        type: 'refreshList',
        payload: response.data.deviceList,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
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
      let response = yield call(queryActivities, payload);
      response = response.data.activityVOList
      if (response != []) {
        for (let i = 0; i < response.length; i++) {
          response[i] = <Option key={response[i].id}>{response[i].activityName}</Option>;
        }
      }
      else {
        for (let i = 10; i < 16; i++) {
          response.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
      }
      yield put({
        type: 'appendActivity',
        payload: response,
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
      let response = yield call(queryAllManager, payload);
      response = response.data.managerList
      if (response != []) {
        for (let i = 0; i < response.length; i++) {
          response[i] = <Option key={response[i].id}>{response[i].userAccount}</Option>;
        }
      } else {
        for (let i = 10; i < 16; i++) {
          response.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
      }
      yield put({
        type: 'appendAdmin',
        payload: response,
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
        activities: action.payload,
        // activities: state.activities.concat(action.payload),
      };
    },
    appendAdmin(state, action) {
      return {
        ...state,
        managers: action.payload,
        // mangers: state.mangers.concat(action.payload),
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
