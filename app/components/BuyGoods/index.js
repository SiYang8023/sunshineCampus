import React, { Fragment } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import 'antd/lib/pagination/style/css';
import { Pagination } from 'antd';
import one from './img/one.png';
import two from './img/two.png';
import three from './img/three.png';

export const GoodsStyle = styled.div`
  .info {
    padding: 20px 20px 20px 30px;
    position: relative;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) inset;
    margin-bottom: 30px;
  }
  .box {
    display: flex;
  }
  .left {
    width: 120px;
    text-align: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
    }
  }
  .right {
    line-height: 28px;
  }
  .title {
    color: rgb(58, 58, 58);
    font-size: 17px;
  }
  .brief {
    color: #1bc06c;
    font-size: 16px;
  }
  .price {
    color: #ed4e51;
    font-size: 20px;
    margin-left: 10px;
  }
  .right-margin {
    margin-right: 30px;
    color: rgb(70, 70, 70);
  }
`;
const data = [
  {
    img: one,
    user: 'admin1',
    name: '求购经济研究参考 2015年21期',
    breif: '求购经济研究参考 2015年21期',
    price: 100,
    place: '网上',
    publishTime: '2019-5-1',
    qq: '123456',
    phone: '234232355',
    weiChat: 'hkjlkjl',
    school: '陕西科技大学镐京学院',
  },
  {
    img: two,
    user: 'admin1',
    name: '求购经济研究参考 2015年21期',
    breif: '求购经济研究参考 2015年21期',
    price: 100,
    place: '网上',
    publishTime: '2019-5-1',
    qq: '123456',
    phone: '234232355',
    weiChat: 'hkjlkjl',
    school: '陕西科技大学镐京学院',
  },
  {
    img: three,
    user: 'admin1',
    name: '求购经济研究参考 2015年21期',
    breif: '求购经济研究参考 2015年21期',
    price: 100,
    place: '网上',
    publishTime: '2019-5-1',
    qq: '123456',
    phone: '234232355',
    weiChat: 'hkjlkjl',
    school: '陕西科技大学镐京学院',
  },
  {
    img: one,
    user: 'admin1',
    name: '求购经济研究参考 2015年21期',
    breif: '求购经济研究参考 2015年21期',
    price: 100,
    place: '网上',
    publishTime: '2019-5-1',
    qq: '123456',
    phone: '234232355',
    weiChat: 'hkjlkjl',
    school: '陕西科技大学镐京学院',
  },
  {
    img: two,
    user: 'admin1',
    name: '求购经济研究参考 2015年21期',
    breif: '求购经济研究参考 2015年21期',
    price: 100,
    place: '网上',
    publishTime: '2019-5-1',
    qq: '123456',
    phone: '234232355',
    weiChat: 'hkjlkjl',
    school: '陕西科技大学镐京学院',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class BuyGoods extends React.Component {
  render() {
    return (
      <Fragment>
        <GoodsStyle>
          {_.map(data, (v, i) => (
            <div className="info" key={i}>
              <div className="box">
                <div className="left">
                  <img src={v.img} />
                  <div style={{ marginTop: 10 }}>{v.user}</div>
                </div>
                <div className="right">
                  <div className="title">{v.name}</div>
                  <div className="brief">{v.breif}</div>
                  <div>
                    <span className="right-margin">
                      期望价格: <span className="price">{v.price}</span>
                    </span>
                    <span className="right-margin">
                      交易地点: <span>{v.place}</span>
                    </span>
                    <span className="right-margin">
                      发布时间: <span>{v.publishTime}</span>
                    </span>
                    <span className="right-margin">
                      学校: <span>{v.school}</span>
                    </span>
                  </div>
                  <div>
                    <span className="right-margin">
                      手机: <span>{v.phone}</span>
                    </span>
                    <span className="right-margin">
                      QQ: <span>{v.qq}</span>
                    </span>
                    <span className="right-margin">
                      微信: <span>{v.weiChat}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </GoodsStyle>
        <Pagination 
          defaultCurrent={1}
          total={500}
          style={{ textAlign:'center' }}
        />
      </Fragment>
    );
  }
}
