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
import { ReleaseSaleStyle } from './style';

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
class ReleaseSale extends React.Component {
  state = {
    loading: false,
    fileList: [],
  };

  // 提交表单
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  handleUpload = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-4);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
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
    // 上传封面
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;

    // 上传相册
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      listType: 'picture',
      onChange: this.handleUpload,
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
      <Fragment>
        <MainPage />
        <ReleaseSaleStyle>
          <Card
            title={
              this.props.location.state === 'saleInfo'
                ? '发布二手信息'
                : '发布求购信息'
            }
            style={{ width: 1000, margin: '85px auto' }}
          >
            <div className="ibox-title">
              {/* <h4>
                {this.props.location.state === 'saleInfo'
                  ? '发布二手信息'
                  : '发布求购信息'}
              </h4> */}
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
                {this.props.location.state === 'saleInfo' ? (
                  <Form.Item label="封面">
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                    >
                      {imageUrl ? (
                        <img src={imageUrl} alt="avatar" />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Form.Item>
                ) : null}
                {this.props.location.state === 'saleInfo' ? (
                  <Form.Item label="相册">
                    <Upload {...props} fileList={this.state.fileList}>
                      <Button>
                        <Icon type="upload" /> 点击上传图片
                      </Button>
                    </Upload>
                  </Form.Item>
                ) : null}
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
        </ReleaseSaleStyle>
      </Fragment>
    );
  }
}

const ReleaseSaleForm = Form.create({ name: 'normal_login' })(ReleaseSale);
export default ReleaseSaleForm;
