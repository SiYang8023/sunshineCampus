import React, { Fragment } from 'react';
import 'antd/lib/list/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/pagination/style/css';
import { List, Card, Pagination } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';

export const GoodsStyle = styled.div`
  .ant-card-body {
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
  .ant-card-body:hover {
    box-shadow: 1px 4px 5px 0 rgba(0, 0, 0, 0.3);
  }
  .price {
    color: red;
    font-size: 24px;
    font-weight: bold;
    font-family: sans-serif;
  }
  .brief {
    display: flex;
    justify-content: space-between;
  }
  .click {
    color: #888;
    font-size: 13px;
    line-height: 35px;
  }
  .name {
    color: #1b816c;
    font-size: 16px;
  }
  .user {
    color: #858d8e;
    font-size: 12px;
  }
  .ant-pagination {
    text-align: center;
  }
`;
const data = [
  {
    img:one,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:1,
  },
  {
    img:two,
    price:208,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:2,
  },
  {
    img:three,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:3,
  },
  {
    img:two,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:4,
  },
  {
    img:one,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:5,
  },
  {
    img:three,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:6,
  },
  {
    img:two,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:7,
  },
  {
    img:one,
    price:20,
    name:'电动车出售',
    click:100,
    user: 'admin1',
    id:8,
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class Goods extends React.Component {
  render() {
    return (
      <Fragment>
        <GoodsStyle>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <Link to={`/sale/${item.id}`}>
                <List.Item>
                  <Card>
                    <img src={item.img} width="220px" />
                    <div className="brief">
                      <span className="price">{`￥${item.price}`}</span>
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="user">{item.user}</div>
                  </Card>
                </List.Item>
              </Link>
            )}
          />
          <Pagination defaultCurrent={1} total={500} />
        </GoodsStyle>
      </Fragment>
    );
  }
}
