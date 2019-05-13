import React, { Fragment } from 'react';
import 'antd/lib/menu/style/css';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';

export const RankStyle = styled.div`
  height: 50px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
  margin: 20px 0;
  .anticon-swap {
    transform: rotate(90deg);
    vertical-align: baseline;
  }
  .ant-menu-horizontal,
  .ant-menu-item,
  .ant-menu-item-selected,
  .ant-menu-item:hover {
    border-bottom: none !important;
  }
`;
/* eslint-disable react/prefer-stateless-function */
export default class Rank extends React.Component {
  state = {
    current: '1',
    type: 'swap',
    direction: false,
    colorOne:'#555',
    colorTwo:'#555',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    if (e.key === '2' && !this.state.direction){
      this.setState({
        type: 'arrow-up',
        direction: true,
      });
    } else {
      this.setState({
        type: 'arrow-down',
        direction: false,
      });
    }
  };
  // handleClick = key => {
  //   if (key === 1) {
  //     this.setState({
  //       colorOne:'#1890ff',
  //       colorTwo:'#555',
  //     })
  //   } else if (key === 2 && !this.state.direction) {
  //     this.setState({
  //       type: 'arrow-down',
  //       colorTwo:'#1890ff',
  //       colorOne:'#555',
  //       direction: true,
  //     })
  //   } else {
  //     this.setState({
  //       type:'arrow-up',
  //       colorTwo:'#1890ff',
  //       colorOne:'#555',
  //       direction: false,
  //     })
  //   }
    // console.log(this);
  // }

  render() {
    return (
      <Fragment>
        <RankStyle>
          <Menu
            mode="horizontal"
            selectedKeys={[this.state.current]}
            onClick={this.handleClick}
          >
            <Menu.Item key="1">
              随机<Icon type="swap" />
            </Menu.Item>
            <Menu.Item key="2">
              时间<Icon type={this.state.type} />
            </Menu.Item>
            <Menu.Item key="3">
              价格<Icon type="swap" />
            </Menu.Item>
          </Menu>
          {/* <span className="item" 
             style={{color:this.state.colorOne}} 
             onClick={()=>this.handleClick(1)}>
            随机<Icon type="swap" />
          </span>
          <span className="item" 
              style={{color:this.state.colorTwo}}
              onClick={()=>this.handleClick(2)}>
            时间<Icon type={this.state.type} />
          </span>
          <span>价格</span>
          <span>热度</span> */}
        </RankStyle>
      </Fragment>
    );
  }
}
