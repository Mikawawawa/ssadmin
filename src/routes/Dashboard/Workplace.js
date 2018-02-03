import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import { Radar } from '../../components/Charts';

import styles from './Workplace.less';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    link: '',
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    link: '',
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    link: '',
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    link: '',
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    link: '',
  },
];

const logo = 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png' // Webpack
@connect(state => ({
  // project: state.project,
  // activities: state.activities,
  // chart: state.chart,
  workplace: state.workplace,
  user: state.user,
}))
export default class Workplace extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'workplace/fetchNotice',
    });
    dispatch({
      type: 'workplace/fetchList',
    });
    dispatch({
      type: 'workplace/fetch',
    });
  }

  renderActivities() {
    const {
      workplace: { list },
    } = this.props;
    return list.map((item) => {
      // const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      //   if (item[key]) {
      //     return <a href={item[key].link} key={item[key].name}>{item[key].name}</a>;
      //   }
      //   return key;
      // });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={logo} />}
            title={
              <span>
                <a className={styles.username}>{item.activityName}</a>
                &nbsp;
                {/* <span className={styles.event}>{events}</span> */}
              </span>
            }
            description={
              <span className={styles.datetime} title={`添加时间`}>
                {moment(item.addTime).fromNow()}
              </span>
            }
          />
        </List.Item>
      );
    });
  }

  render() {
    const {
      workplace: { projectLoading, notice, activitiesLoading, radarData, list },
      user: { currentUser },
    } = this.props;

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar size="large" src={currentUser.avatar} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{currentUser.name}</div>
          <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </div>
    );

    const pageHeaderExtra = (
      <div className={styles.pageHeaderExtra}>
        <div>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout
        content={pageHeaderContent}
        extraContent={pageHeaderExtra}
      >
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="列表中的机器"
              bordered={false}
              extra={<Link to="/machine/list">全部机器</Link>}
              loading={projectLoading}
              bodyStyle={{ padding: 0 }}
            >
              {
                notice.map(item => (
                  <Card.Grid className={styles.projectGrid} key={item.id}>
                    <Card bodyStyle={{ padding: 0 }} bordered={false}>
                      <Card.Meta
                        title={(
                          <div className={styles.cardTitle}>
                            <Avatar size="small" src={logo} />
                            <Link to={'#'}>{item.deviceId}</Link>
                          </div>
                        )}
                        description={`更新时间：${item.updateTime}`}
                      />
                      <div className={styles.projectItemContent}>
                        <Link to={'#'}>{item.member || ''}</Link>
                        {item.updatedAt && (
                          <span className={styles.datetime} title={item.addTime}>
                            {moment(item.updateTime).fromNow()}
                          </span>
                        )}
                      </div>
                    </Card>
                  </Card.Grid>
                ))
              }
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="动态"
              loading={activitiesLoading}
            >
              <List loading={activitiesLoading} size="large">
                <div className={styles.activitiesList}>
                  {this.renderActivities()}
                </div>
              </List>
            </Card>
          </Col>
          {/* <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              title="快速开始 / 便捷导航"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <EditableLinkGroup
                onAdd={() => { }}
                links={links}
                linkElement={Link}
              />
            </Card>
            <Card
              style={{ marginBottom: 24 }}
              bordered={false}
              title="XX 指数"
              loading={radarData.length === 0}
            >
              <div className={styles.chart}>
                <Radar hasLegend height={343} data={radarData} />
              </div>
            </Card>
            <Card
              bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
              bordered={false}
              title="团队"
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {
                    members.map(item => (
                      <Col span={12} key={`members-item-${item.id}`}>
                        <Link to={item.link}>
                          <Avatar src={item.logo} size="small" />
                          <span className={styles.member}>{item.title}</span>
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Card>
          </Col> */}
        </Row>
      </PageHeaderLayout>
    );
  }
}
