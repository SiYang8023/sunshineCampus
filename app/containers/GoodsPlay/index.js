import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import 'antd/lib/button/style/css';
import 'antd/lib/comment/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/list/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/card/style/css';
import moment from 'moment';
import {
  Icon,
  Button,
  Comment,
  Avatar,
  Form,
  List,
  Input,
  Row,
  Col,
} from 'antd';
import MainPage from 'containers/MainPage';
import { InfoStyle, BriefStyle, CommentStyle, RecommendStyle } from './style';
import one from './img/one.png';
import img from './img/img.png';
import pic from './img/pic.png';
import two from './img/1.jpg';
import three from './img/2.jpg';

const data = [
  {
    img: one,
    price: 20,
    name: '电动车出售',
    click: 100,
    user: 'admin1',
    id: 1,
  },
  {
    img: two,
    price: 208,
    name: '电动车出售',
    click: 100,
    user: 'admin1',
    id: 2,
  },
  {
    img: three,
    price: 20,
    name: '电动车出售',
    click: 100,
    user: 'admin1',
    id: 3,
  },
  {
    img: two,
    price: 20,
    name: '电动车出售',
    click: 100,
    user: 'admin1',
    id: 4,
  },
];
/* eslint-disable react/prefer-stateless-function */
const TextArea = Input.TextArea;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`共${comments.length}个评论`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={3} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        添加评论
      </Button>
    </Form.Item>
  </div>
);
// const axios = require('axios');
/* eslint-disable react/prefer-stateless-function */
export default class GoodsPlay extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  componentWillUnmount() {
    this.setState = () => {
      return
    }
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: '我',
            avatar: pic,
            content: <p>{this.state.value}</p>,
            datetime: moment().format('MMMM Do YYYY'),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         list:[],
  //         domain:'http://a.itying.com/'
  //      };
  // };

  // 回到页面顶部
  componentDidMount() {
    this.node.scrollIntoView();
  }

  //   requestData(id){
  //     var api=this.state.domain+'api/productcontent?id='+id;
  //     axios.get(api)
  //     .then((response)=>{
  //          console.log(response);
  //         this.setState({
  //             list:response.data.result[0]
  //         })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  //   };

  componentWillMount() {
    const id = this.props.match.params.id;
    console.log(id);
    // this.requestData(id);
  }

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div ref={node => (this.node = node)}>
        <MainPage />
        <InfoStyle>
          <div style={{ display: 'flex' }}>
            <img src={one} width="400px" height="400px" />
            <div className="info">
              <div className="title">NOKIA-基于Linux的手机</div>
              <div className="price">2300元</div>
              <div>
                <Icon type="user" />
                admin
              </div>
              <div>
                <Icon type="qq" />
                1365335467
              </div>
              <div>
                <Icon type="mobile" />
                1365335467d
              </div>
              <div>
                <Icon type="bank" />
                陕西科技大学镐京学院
              </div>
              <div>
                <Icon type="environment" />
                教室
              </div>
              <div>
                <Icon type="clock-circle" />
                2019-5-6
              </div>
              <div>
                <Icon type="wechat" />
                dssdfsf
              </div>
            </div>
          </div>
        </InfoStyle>
        <BriefStyle>
          <img src={img} />
          <div className="brief">
            喜欢Linux系统的就入手吧。生命在于折腾！
            <br />
            (联系我的时候，请说明是在柚子校园看见的噢！)
          </div>
        </BriefStyle>
        <CommentStyle>
          <Button type="primary" className="btn">
            评论
          </Button>
          <div className="comment">
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
              avatar={<Avatar src={pic} />}
              content={
                <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </div>
        </CommentStyle>
        <RecommendStyle>
          <Button type="primary" className="btn">
            推荐
          </Button>
          <Row>
            {_.map(data, (item, i) => (
              <Col span={6} key={i}>
                <Link to={`/sale/${item.id}`}>
                  <div className="items">
                    <img src={item.img} width="200px" height="208px" />
                    <div style={{ padding: 10 }}>
                      <div className="brief">
                        <span className="price">{`￥${item.price}`}</span>
                        <span className="click">{`点击量 ${item.click}`}</span>
                      </div>
                      <div className="name">{item.name}</div>
                      <div className="user">{item.user}</div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </RecommendStyle>
      </div>
    );
  }
}
