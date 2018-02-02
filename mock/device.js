import {
  getUrlParams
} from './utils';
import Mock from 'mockjs'

const Random = Mock.Random

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png' // Webpack
]
const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png'
]

export const queryDevice = {
  code: 0,
  data: {
    deviceList: [{
        activityId: 28,
        addTime: "2017-11-13 20:14:56",
        belongManager: 5,
        deviceId: "0123456789123456",
        id: 1,
        status: 1,
        updateTime: "2017-11-15 23:31:09"
      },
      {
        activityId: 28,
        addTime: "2017-11-25 17:55:32",
        belongManager: 8,
        deviceId: "10-C3-7B-23-3A-E1",
        id: 2,
        status: 1,
        updateTime: "2017-11-25 17:59:23"
      },
      {
        activityId: 0,
        addTime: "2017-11-30 14:06:53",
        deviceId: "10-C3-7B-23-3A-E2",
        id: 4,
        status: 0,
        updateTime: "2017-11-30 14:06:53"
      },
      {
        activityId: 0,
        addTime: "2018-01-30 13:22:59",
        deviceId: "94-88-85-5A-51-50",
        id: 5,
        status: 0,
        updateTime: "2018-01-30 13:22:59"
      },
      {
        activityId: 0,
        addTime: "2018-01-30 13:24:35",
        deviceId: "94:88:85:5A:51:50",
        id: 6,
        status: 0,
        updateTime: "2018-01-30 13:24:35"
      },
      {
        activityId: 0,
        addTime: "2018-01-30 13:25:57",
        deviceId: "9408808505A0510E3",
        id: 7,
        status: 0,
        updateTime: "2018-01-30 13:25:57"
      }
    ]
  },
  msg: "请求成功"
}

export const deviceDelete = {
  code: 0,
  msg: "请求成功"
}

export const deviceInsert = {
  code: 0,
  data: {
    msg: "新增设备成功！",
    code: 0,
    systemDevice: {
      activityId: 0,
      addTime: "2018-01-30 13:22:59",
      deviceId: "94-88-85-5A-51-50",
      id: 5,
      status: 0,
      updateTime: "2018-01-30 13:22:59"
    }
  },
  msg: "请求成功"
}

export const allocateATD = {
  code: 0,
  msg: '请求成功',
};

export const allocateDTM = {
  code: 0,
  msg: '请求成功',
};
