import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { message } from 'antd/lib/index';
import { List, Card, Row, Col, Radio, Form, Upload, Select, Input, Progress, Button, Icon, Dropdown, Menu, Avatar, Modal } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './BasicList.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};



const { Search } = Input;

@connect(state => ({
  device: state.device,
}))
export default class BasicList extends PureComponent {
  state = {
    modalVisible: false,
    ATDVisible: false,
    DTMVisible: false,
    addInputValue: '',
    count: 8,
    optionDevice: 0,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'device/fetch',
      payload: {
        count: this.state.count,
      },
    });
    this.props.dispatch({
      type: 'device/admins',
      payload: {
        count: this.state.count,
      },
    });
    this.props.dispatch({
      type: 'device/activities',
      payload: {
        count: this.state.count,
      },
    });
  }

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  }

  handleATDVisible = (flag) => {
    this.setState({
      ATDVisible: !!flag,
    });
  }

  handleDTMVisible = (flag) => {
    this.setState({
      DTMVisible: !!flag,
    });
  }

  handleAddInput = (e) => {
    this.setState({
      addInputValue: e.target.value,
    });
  }

  handleAdd = () => {
    this.props.dispatch({
      type: 'device/add',
      payload: {
        did: this.state.addInputValue,
      },
    });
    message.success('添加成功');
    this.setState({
      modalVisible: false,
    });
  }

  handleATD = () => {

  }

  handleDTM = () => {

  }

  render() {
    const { device: { list, activities, mangers, loading } } = this.props;
    const { modalVisible, ATDVisible, DTMVisible, opitionDevice, addInputValue, count } = this.state;

    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const extraContent = (
      <div className={styles.extraContent}>
        {/* <RadioGroup defaultValue="all">
          <RadioButton value="all">全部</RadioButton>
          <RadioButton value="progress">进行中</RadioButton>
          <RadioButton value="waiting">等待中</RadioButton>
        </RadioGroup> */}
        <Search
          className={styles.extraContentSearch}
          placeholder="按机器id查询"
          onSearch={() => ({})}
        />
      </div>
    );

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    };

    const ListContent = ({ data: { owner, createdAt, percent, status } }) => (
      <div className={styles.listContent}>
        <div>
          <span>管理员</span>
          {/* <p>{moment(createdAt).format('YYYY-MM-DD hh:mm')}</p> */}
          <p>{owner}</p>
        </div>
        {/* <div>
          <Progress percent={percent} status={status} strokeWidth={6} />
        </div> */}
      </div>
    );

    const menu = (
      <Menu>
        <Menu.Item>
          <a>编辑</a>
        </Menu.Item>
        <Menu.Item>
          <a>删除</a>
        </Menu.Item>
      </Menu>
    );

    const MoreBtn = () => (
      <Dropdown overlay={menu}>
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );

    return (
      <PageHeaderLayout>
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="当前机器数" value={`${count}台`} />
              </Col>
              {/* <Col sm={8} xs={24}>
                <Info title="本周任务平均处理时间" value="32分钟" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="本周完成任务数" value="24个任务" />
              </Col> */}
            </Row>
          </Card>

          <Card
            className={styles.listCard}
            bordered={false}
            title="机器列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Row>
              <Col span={3}>
                <Button type="dashed" style={{ marginBottom: 8 }} icon="plus" onClick={this.handleModalVisible}>
                  添加
                </Button>
              </Col>
              {/* <Col span={12}><Input placeholder="请输入设备的MAC地址" /></Col> */}
            </Row>

            <List
              size="large"
              rowKey="id"
              loading={loading}

              dataSource={list}
              renderItem={item => (
                <List.Item
                  actions={[<Button onClick={this.handleDTMVisible}>分配管理员</Button>
                    , <Button onClick={this.handleATDVisible}>分配活动</Button>]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.logo} shape="square" size="large" />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.subDescription}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
          <Modal
            title="新增机器"
            visible={modalVisible}
            onOk={this.handleAdd}
            onCancel={() => this.handleModalVisible()}
          >
            <FormItem
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 15 }}
              label="机器编号"
            >
              <Input
                placeholder="请输入机器编号"
                onChange={this.handleAddInput}
                value={addInputValue}
              />
            </FormItem>
          </Modal>
          <Modal
            title="分配活动"
            visible={ATDVisible}
            onOk={this.handleATD}
            onCancel={() => this.handleATDVisible()}
          >
            <FormItem {...formItemLayout} label="活动选择">
              <Select
                mode="multiple"
                placeholder="请选择活动"
                defaultValue={['a10', 'c12']}
              >
                {activities}
              </Select>
            </FormItem>
          </Modal>

          <Modal
            title="分配管理员"
            visible={DTMVisible}
            onOk={this.handleATD}
            onCancel={() => this.handleDTMVisible()}
          >
            <FormItem {...formItemLayout} label="管理员选择">
              <Select
                mode="multiple"
                placeholder="请选择管理员"
                defaultValue={['a10', 'c12']}
              >
                {mangers}
              </Select>
            </FormItem>
          </Modal>
        </div>
      </PageHeaderLayout>
    );
  }
}
