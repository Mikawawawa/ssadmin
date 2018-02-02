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

export const queryModule = {
  code: 0,
  data: {
    msg: '查询成功！',
    code: 0,
    systemModuleList: [{
        addTime: '2017-11-24 22:53:52',
        description: '天天打豆豆',
        icon: avatars[0],
        id: 12,
        moduleName: '打豆豆',
      },
      {
        addTime: '2017-12-01 19:50:19',
        description: '小小小',
        icon: avatars[1],
        id: 14,
        moduleName: '大大大',
      },
      {
        addTime: '2017-12-01 19:50:19',
        description: '小小小',
        icon: avatars[2],
        id: 14,
        moduleName: '大大大',
      },
      {
        addTime: '2017-12-01 19:50:19',
        description: '小小小',
        icon: avatars[3],
        id: 14,
        moduleName: '大大大',
      }
    ]
  },
  msg: '请求成功'
}

export const moduleDelete = {
  code: 0,
  msg: '请求成功',
};

export const moduleInsert = {
  code: 0,
  data: {
    msg: "创建模块成功！",
    code: 0,
    systemModule: {
      addTime: "2018-02-02 13:35:08",
      description: "testmodule",
      icon: "upload/module/23/2018020213350827512061935.png",
      id: 23,
      moduleName: "test"
    }
  },
  msg: "请求成功"
}

// {
//   code: 0,
//   data: {
//     msg: '查询成功！',
//     code: 0,
//     systemModuleList: [{
//         addTime: '2017-10-31 15:55:29',
//         id: 1,
//         moduleName: '个人拍照',
//         moduleUrl: 'AA'
//       },
//       {
//         addTime: '2017-10-31 17:38:49',
//         id: 2,
//         moduleName: '人脸识别',
//         moduleUrl: 'E:\\IntelijIdea_workspace\\ljj\\target\\ljjmodule/10/bb'
//       },
//       {
//         addTime: '2017-10-31 17:42:02',
//         id: 3,
//         moduleName: '云摄影',
//         moduleUrl: 'E:\\IntelijIdea_workspace\\ljj\\target\\ljj\\module\\11\\bb'
//       },
//       {
//         addTime: '2017-10-31 17:42:02',
//         id: 4,
//         moduleName: '专业展示',
//         moduleUrl: 'E:\\IntelijIdea_workspace\\ljj\\target\\ljj\\module\\11\\bb'
//       },
//       {
//         addTime: '2017-10-31 17:42:02',
//         id: 5,
//         moduleName: '3D打印',
//         moduleUrl: 'E:\\IntelijIdea_workspace\\ljj\\target\\ljj\\module\\11\\bb'
//       },
//       {
//         addTime: '2017-10-31 17:42:02',
//         id: 6,
//         moduleName: '大数据统计',
//         moduleUrl: 'E:\\IntelijIdea_workspace\\ljj\\target\\ljj\\module\\11\\bb'
//       }
//     ]
//   },
//   msg: '请求成功'
// }
