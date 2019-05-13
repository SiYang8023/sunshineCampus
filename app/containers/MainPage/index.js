import React, { Fragment } from 'react';
import _ from 'lodash';
import { Switch, Route, Link } from 'react-router-dom';
import 'antd/lib/menu/style/css';
import { Menu, Icon } from 'antd';
import sunshine from 'images/sunshine.jpg';
import pic from 'images/pic.png';
import RightNav from 'components/RightNav';
import LeftNav from 'components/LeftNav';
import salePage from '../SalePage';
import buyPage from '../BuyPage';
import NavLink from './NavLink';
import schoolPage from '../SchoolPage';

/* eslint-disable react/prefer-stateless-function */
class MainPage extends React.Component {
  state = {
    current: _.isUndefined(this.props.location)
      ? 'main'
      : this.props.location.state || 'sale',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Fragment>
        <NavLink>
          <Menu
            mode="horizontal"
            selectedKeys={[this.state.current]}
            onClick={this.handleClick}
          >
            <Menu.Item key="img" disabled>
              <img src={sunshine} width="50px" />
              Sunshine校园
            </Menu.Item>
            <Menu.Item key="main">
              <Link to="/">
                <Icon type="import" />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="sale">
              <Link to={{ pathname: '/sunshineCampus/sale', state: 'sale' }}>
                <Icon type="sync" />
                二手
              </Link>
            </Menu.Item>
            <Menu.Item key="buy">
              <Link to={{ pathname: '/sunshineCampus/buy', state: 'buy' }}>
                <Icon type="shopping" />
                求购
              </Link>
            </Menu.Item>
            <Menu.Item key="school">
              <Link
                to={{ pathname: '/sunshineCampus/school', state: 'school' }}
              >
                <Icon type="usergroup-add" />
                开通学校
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="register" style={{ float: 'right' }}>
              <Link to="/">
                <Icon type="edit" />
                退出
              </Link>
            </Menu.Item>
            <Menu.Item key="login" style={{ float: 'right' }}>
              <Link to={{ pathname: '/info', state: 'info' }}>
                <img src={pic} width="40px" height="40px" style={{ borderRadius:'50%' }} />
              </Link>
            </Menu.Item> */}
            <Menu.Item key="register" style={{ float: 'right' }}>
              <Link to={{ pathname: '/register', state: 'register' }}>
                <Icon type="edit" />
                注册
              </Link>
            </Menu.Item>
            <Menu.Item key="login" style={{ float: 'right' }}>
              <Link to={{ pathname: '/login', state: 'login' }}>
                <Icon type="form" />
                登录
              </Link>
            </Menu.Item>
          </Menu>
        </NavLink>
        <LeftNav />
        <RightNav />
        <Switch>
          <Route path="/sunshineCampus/sale" component={salePage} />
          <Route path="/sunshineCampus/buy" component={buyPage} />
          <Route path="/sunshineCampus/school" component={schoolPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default MainPage;
