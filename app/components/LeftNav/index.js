import React, { Fragment } from 'react';
import _ from 'lodash';
import 'antd/lib/menu/style/css';
import { Menu, Icon, Button } from 'antd';
import { LeftNavStyle } from './style';

const SubMenu = Menu.SubMenu;
/* eslint-disable react/prefer-stateless-function */
export default class LeftNav extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const menuList = [
      { item: '学校', key: 'school', icon: 'environment' },
      { item: '所有分类', key: 'all', icon: 'fullscreen-exit' },
      { item: '代步工具', key: 'tool', icon: 'car' },
      { item: '手机', key: 'phone', icon: 'phone' },
      { item: '电脑', key: 'computer', icon: 'desktop' },
      { item: '数码', key: 'digital', icon: 'laptop' },
      { item: '衣帽鞋伞', key: 'clothes', icon: 'skin' },
      { item: '体育健身', key: 'gym', icon: 'gold' },
      { item: '乐器', key: 'music', icon: 'customer-service' },
      { item: '自行设计', key: 'design', icon: 'pushpin' },
      { item: '其他', key: 'other', icon: 'dash' },
    ];
    return (
      <Fragment>
        <LeftNavStyle>
          <Button onClick={this.toggleCollapsed} style={{ borderRadius: 0 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {_.map(menuList, (v, i) => (
              <Menu.Item key={v.key}>
                <Icon type={v.icon} />
                <span>{v.item}</span>
              </Menu.Item>
            ))}
          </Menu>
        </LeftNavStyle>
      </Fragment>
    );
  }
}
