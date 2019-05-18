import React, { Fragment } from 'react';
import _ from 'lodash';
import 'antd/lib/card/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/input-number/style/css';
import {
  Form,
  Icon,
  Input,
  Button,
  Card,
  Upload,
  message,
  InputNumber,
  Select,
} from 'antd';
import MainPage from 'containers/MainPage';
import { ReleaseBuyStyle } from './style';

const Option = Select.Option;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('你只能上传图片');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小必须小于2MB!');
  }
  return isJPG && isLt2M;
}

/* eslint-disable react/prefer-stateless-function */
class ReleaseBuy extends React.Component {
  // 提交表单
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const selectList = [
      { item: '代步工具', key: 'tool' },
      { item: '手机', key: 'phone' },
      { item: '电脑', key: 'computer' },
      { item: '数码', key: 'digital' },
      { item: '衣帽鞋伞', key: 'clothes' },
      { item: '体育健身', key: 'gym' },
      { item: '乐器', key: 'music' },
      { item: '自行设计', key: 'design' },
      { item: '其他', key: 'other' },
    ];
    return (
      <div ref={node => (this.node = node)}>
        <MainPage />
        <ReleaseBuyStyle>
          <Card
            title="发布求购信息"
            style={{ width: 1000, margin: '85px auto' }}
          >
            <div className="ibox-title">
              <Form
                {...formItemLayout}
                onSubmit={this.handleSubmit}
                className="login-form"
              >
                <Form.Item label="标题">
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: '请输入用户名标题!',
                      },
                      {
                        max: 20,
                        message: '最多输入20个字!',
                      },
                    ],
                  })(<Input placeholder="请输入标题" />)}
                </Form.Item>
                <Form.Item label="详情">
                  {getFieldDecorator('info', {
                    rules: [
                      {
                        required: true,
                        message: '请输入详情!',
                      },
                      {
                        max: 50,
                        message: '最多输入50个字!',
                      },
                    ],
                  })(<Input placeholder="请输入详情" />)}
                </Form.Item>
                <Form.Item label="价格">
                  {getFieldDecorator('price', {
                    rules: [
                      {
                        required: true,
                        message: '请输入期望价格!',
                      },
                    ],
                  })(<InputNumber min={1} />)}
                </Form.Item>
                <Form.Item label="交易地点">
                  {getFieldDecorator('place', {
                    rules: [
                      {
                        required: true,
                        message: '请输入交易地点!',
                      },
                      {
                        max: 20,
                        message: '最多输入20个字!',
                      },
                    ],
                  })(<Input placeholder="宿舍、教学楼、食堂等" />)}
                </Form.Item>
                <Form.Item label="分类">
                  <Select defaultValue="代步工具">
                    {_.map(selectList, (v, i) => (
                      <Option key={i} value={v.key}>
                        {v.item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="手机">
                  <Input placeholder="请输入你的手机号" />
                </Form.Item>
                <Form.Item label="QQ">
                  <Input placeholder="请输入你的QQ" />
                </Form.Item>
                <Form.Item label="微信">
                  <Input placeholder="请输入你的微信" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form>
            </div>
          </Card>
        </ReleaseBuyStyle>
      </div>
    );
  }
}

const ReleaseBuyForm = Form.create({ name: 'normal_login' })(ReleaseBuy);
export default ReleaseBuyForm;
