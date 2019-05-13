import React from 'react';
import 'antd/lib/card/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/radio/style/css';
import { Card, Form, Input, Radio, Button, Icon } from 'antd';
import { WrapContent } from './style';

const RadioGroup = Radio.Group;
/* eslint-disable react/prefer-stateless-function */
class SchoolPage extends React.Component {
  // 回到页面顶部
  componentDidMount() {
    this.node.scrollIntoView();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

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
    return (
      <div ref={node => (this.node = node)}>
        <WrapContent>
          <Card title="开通学校" style={{ width: 1000, margin: '85px auto' }}>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="login-form"
            >
              <Form.Item label="姓名">
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的姓名!',
                    },
                    {
                      max: 20,
                      message: '最多输入10个字!',
                    },
                  ],
                })(<Input placeholder="请输入您的姓名" />)}
              </Form.Item>
              <Form.Item label="学校">
                {getFieldDecorator('school', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的学校!',
                    },
                    {
                      max: 20,
                      message: '最多输入20个字!',
                    },
                  ],
                })(<Input placeholder="请输入学校名称" />)}
              </Form.Item>
              <Form.Item label="联系电话">
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的联系方式!',
                    },
                    {
                      max: 20,
                      message: '最多输入20个字!',
                    },
                  ],
                })(<Input placeholder="请填写您的手机号，QQ，微信或者邮箱" />)}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  提交申请
                </Button>
              </Form.Item>
            </Form>
            <div
              style={{
                display: 'flex',
                marginLeft: 30,
                borderTop: '1px solid #e8e8e8',
                paddingTop: 20,
              }}
            >
              <div>
                <Icon type="info-circle" style={{ color: '#efc423' }} />
              </div>
              <div style={{ marginLeft: 10 }}>
                联系方式必须为本人真实使用联系号码
                <br />
                申请审核时间不超过24小时，请耐心等待
              </div>
            </div>
          </Card>
        </WrapContent>
      </div>
    );
  }
}

const SchoolPageForm = Form.create({ name: 'normal_login' })(SchoolPage);
export default SchoolPageForm;
