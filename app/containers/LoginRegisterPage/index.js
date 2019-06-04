import React, { Fragment } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/auto-complete/style/css';
import { Form, Icon, Input, Button, Checkbox, AutoComplete } from 'antd';
import axios from 'axios';
import regbg from 'images/reg_bg.jpg';
import { LoginRegister } from './style';

/* eslint-disable react/prefer-stateless-function */
class LoginRegisterPage extends React.Component {
  state = {
    dataSource: ['陕西科技大学镐京学院', '陕西科技大学'],
    current: this.props.location.state,
    validator: false,
    ...this.initState(),
  };

  componentDidMount() {
    this.node.scrollIntoView();
  }

  onSelect = value => {
    console.log('onSelect', value);
  };

  onInputChange = value => {
    const { dataSource } = this.state;
    if (_.indexOf(dataSource, value) === -1) {
      this.setState({
        dataSource: ['未找到符合结果'],
      });
    } else {
      this.setState({
        dataSource: ['陕西科技大学镐京学院', '陕西科技大学'],
      });
    }
    // console.log('value', value);
    // console.log(dataSource);
  };
  // handleSearch = value => {
  //   this.setState({
  //     dataSource: !value ? [] : [value, value + value, value + value + value],
  //   });
  // };

  // 随机验证码
  initState() {
    return {
      data: this.getRandom(109, 48, 4),
      rotate: this.getRandom(75, -75, 4),
      fz: this.getRandom(8, 20, 4),
      color: [
        this.getRandom(100, 255, 3),
        this.getRandom(100, 255, 4),
        this.getRandom(100, 255, 3),
        this.getRandom(100, 255, 3),
      ],
    };
  }

  getRandom(max, min, num) {
    const asciiNum = ~~(Math.random() * (max - min + 1) + min);
    if (!num) {
      return asciiNum;
    }
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(this.getRandom(max, min));
    }
    return arr;
  }

  // 页面跳转
  handleRegister = () => {
    this.props.history.push('/register', 'register');
    this.setState({
      current: 'register',
      validator: false,
    });
    const { setFieldsValue } = this.props.form;
    setFieldsValue({ userName: '', password: '' });
  };

  handleLogin = () => {
    this.props.history.push('/login', 'login');
    this.setState({
      current: 'login',
    });
    const { setFieldsValue } = this.props.form;
    setFieldsValue({ userName: '', password: '' });
  };

  // 密码不一致验证
  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('password')) {
      callback('两次输入不一致！');
    }
    callback();
  };

  handleValidate = e => {
    const num = [];
    this.state.data.map((v, i) => {
      num.push(
        String.fromCharCode(v > 57 && v < 84 ? v + 7 : v < 57 ? v : v + 13),
      );
    });
    if (
      e.target.value.toLowerCase() !==
      num
        .join('')
        .toString()
        .toLowerCase()
    ) {
      this.setState({
        validator: true,
      });
    } else {
      this.setState({
        validator: false,
      });
    }
  };

  // 提交表单
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && !this.state.validator) {
        console.log('Received values of form: ', values);
        this.props.history.push('/sunshineCampus/sale', 'sale');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { current } = this.state;
    return (
      <div ref={node => (this.node = node)}>
        <img src={regbg} />
        <LoginRegister>
          <div className="title">
            {current === 'login' ? '登录' : '注册'}
            sunshine校园
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                  {
                    max: 10,
                    message: '最多输入10个字!',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('school', {
                // initialValue: '1',
              })(
                <AutoComplete
                  dataSource={this.state.dataSource}
                  // onSelect={this.onSelect}
                  onChange={this.onInputChange}
                  // onSearch={this.handleSearch}
                  placeholder="请输入学校"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ],
              })(
                <Input
                  type="password"
                  prefix={<Icon type="lock" />}
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            {current === 'login' ? null : (
              <Fragment>
                <Form.Item>
                  {getFieldDecorator('newPassword', {
                    rules: [
                      {
                        required: true,
                        message: '请再次输入密码!',
                      },
                      {
                        validator: this.handleConfirmPassword,
                      },
                    ],
                  })(
                    <Input
                      type="password"
                      prefix={<Icon type="lock" />}
                      placeholder="请再次输入密码"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Input onChange={this.handleValidate} />
                  <div className="vcodewrap">
                    {this.state.data.map((v, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          this.setState({ ...this.initState() });
                        }}
                        style={{
                          transform: `rotate(${this.state.rotate[i]}deg)`,
                          fontSize: `${this.state.fz[i]}px`,
                          color: `rgb(${this.state.color[i].toString()})`,
                        }}
                      >
                        {String.fromCharCode(
                          v > 57 && v < 84 ? v + 7 : v < 57 ? v : v + 13,
                        )}
                      </div>
                    ))}
                  </div>
                </Form.Item>
                <div className="validate">
                  {this.state.validator ? '验证码错误' : null}
                </div>
              </Fragment>
            )}
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <div>
                  {current === 'login' ? (
                    <Fragment>
                      <Checkbox>记住密码</Checkbox>
                      <a onClick={this.handleRegister}>注册账号</a>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <a onClick={this.handleLogin}>登录</a>
                    </Fragment>
                  )}
                </div>,
              )}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {current === 'login' ? '登录' : '注册'}
              </Button>
            </Form.Item>
          </Form>
        </LoginRegister>
      </div>
    );
  }
}

const LoginRegisterPageForm = Form.create({ name: 'normal_login' })(
  LoginRegisterPage,
);
export default LoginRegisterPageForm;
