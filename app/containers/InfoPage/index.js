import React from 'react';
import _ from 'lodash';
import Foot from 'components/Foot';
import pic from 'images/pic.png';
import 'antd/lib/modal/style/css';
import { Tabs, Button, Modal, Input } from 'antd';
import MainPage from '../MainPage';
import { WrapContent, TabStyle } from './style';

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
// function showConfirm(id) {
//   console.log(id);
//   confirm({
//     title: '你确定删除吗?',
//     content: '删除操作不可撤回',
//     okText: '确定',
//     cancelText: '取消',
//     onOk() {
//       return new Promise((resolve, reject) => {
//         setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//       }).catch(() => console.log('Oops errors!'));
//     },
//     onCancel() {},
//   });
// }

/* eslint-disable react/prefer-stateless-function */
export default class InfoPage extends React.Component {
  state = {
    edit: false,
    nameValue:'ta很懒，还都没留下签名喔~',
    phoneValue: '343443454',
    emailValue:'4534554656656',
  };

  // 回到页面顶部
  componentDidMount() {
    this.node.scrollIntoView();
  }

  showConfirm(id) {
    console.log(id);
    confirm({
      title: '你确定删除吗?',
      content: '删除操作不可撤回',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  goToSale = () => {
    this.props.history.push('/release_sale');
  };

  goToBuy = () => {
    this.props.history.push('/release_buy');
  };

  onEdit = () => {
    this.setState({ edit: true });
  }

  onSure = () => {
    const { nameValue, phoneValue, emailValue } = this.state;
    this.setState({ edit: false });
    console.log(nameValue);
  }

  nameValue = e => {
    this.setState({ nameValue: e.target.value });
  }

  emailValue = e => {
    this.setState({ emailValue: e.target.value });
  }

  phoneValue = e => {
    this.setState({ phoneValue: e.target.value });
  }

  render() {
    const { edit, nameValue, phoneValue, emailValue } = this.state;
    const publishList = [
      { img: pic, title: '一辆二手自行车', info: '一辆二手自行车', key: 1 },
      { img: pic, title: '一辆二手自行车', info: '一辆二手自行车', key: 2 },
      { img: pic, title: '一辆二手自行车', info: '一辆二手自行车', key: 3 },
    ];
    return (
      <div ref={node => (this.node = node)}>
        <MainPage />
        <WrapContent>
          <div>
            <img
              src={pic}
              width="160px"
              height="160px"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div style={{ marginLeft: 50 }}>
            <div className="admin">admin</div>
            <div className="all">共有0件商品，已卖出0件商品</div>
            <div style={{ borderLeft: '4px solid rgb(58,58,58)' }}>
              <div className="item">学校： 陕西科技大学镐京学院</div>
              <div className="item">签名： ta很懒，还都没留下签名喔~</div>
            </div>
          </div>
        </WrapContent>
        <TabStyle>
          <Tabs defaultActiveKey="1">
            <TabPane tab="个人资料" key="1">
              <div className="title">账户信息</div>
              <div className="item">
                <span className="info">账户</span>
                <span>admin</span>
              </div>
              <div className="title">基本信息
                {this.state.edit ? 
                  <Button type="primary" onClick={this.onSure}>
                   确定
                  </Button>: <Button type="primary" onClick={this.onEdit}>
                   编辑资料
                  </Button>}
              </div>
              <div className="item">
                <span className="info">签名</span>
                <span>{this.state.edit ? <Input onChange={this.nameValue} value={nameValue} /> :nameValue}</span>
              </div>
              <div className="item">
                <span className="info">手机</span>
                <span>{this.state.edit ? <Input onChange={this.phoneValue} value={phoneValue} />:phoneValue}</span>
              </div>
              <div className="item">
                <span className="info">email</span>
                <span>{this.state.edit ? <Input onChange={this.emailValue} value={emailValue} />:emailValue}</span>
              </div>
            </TabPane>
            <TabPane tab="我发布的商品" key="2">
              <div className="publish">
                您暂时还没有发布商品呃！你可以
                <span className="click" onClick={this.goToSale}>
                  发布商品
                </span>
              </div>
              {/* {_.map(publishList, (v, i) => (
                <div
                  style={{
                    display: 'flex',
                    marginBottom: 20,
                    position: 'relative',
                  }}
                  key={i}
                >
                  <img src={v.img} width="140px" height="140px" />
                  <div style={{ margin: 20 }}>
                    <h2>{v.title}</h2>
                    <p>{v.info}</p>
                    <span
                      style={{
                        font: '14px "Microsoft YaHei"',
                        color: '#1890ff',
                      }}
                    >
                      商品信息正在展示，90天后自动下架
                    </span>
                  </div>
                  <Button
                    type="primary"
                    onClick={() => this.showConfirm(v.key)}
                  >
                    删除
                  </Button>
                </div>
              ))} */}
            </TabPane>
            <TabPane tab="我发布的求购" key="3">
              {/* <div className="publish">
                您暂时还没有发布求购信息呃！你可以
                <span className="click" onClick={this.goToBuy}>发布求购</span>
              </div> */}
              {_.map(publishList, (v, i) => (
                <div
                  style={{
                    display: 'flex',
                    marginBottom: 20,
                    position: 'relative',
                  }}
                  key={i}
                >
                  <img src={v.img} width="140px" height="140px" />
                  <div style={{ margin: 20 }}>
                    <h2>{v.title}</h2>
                    <p>{v.info}</p>
                    <span
                      style={{
                        font: '14px "Microsoft YaHei"',
                        color: '#1890ff',
                      }}
                    >
                      求购信息正在展示，90天后自动下架
                    </span>
                  </div>
                  <Button
                    type="primary"
                    onClick={() => this.showConfirm(v.key)}
                  >
                    删除
                  </Button>
                </div>
              ))}
            </TabPane>
            <TabPane tab="消息中心" key="4">
              暂无消息
            </TabPane>
          </Tabs>
        </TabStyle>
        <Foot />
      </div>
    );
  }
}
