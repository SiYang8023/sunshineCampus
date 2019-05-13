import React, { Fragment } from 'react';
import 'antd/lib/menu/style/css';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';

export const FootStyle = styled.div`
  height: 40px;
  background: #888;
  color: #fff;
  line-height: 40px;
  text-align: center;
  margin-top: 50px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class Foot extends React.Component {
  render() {
    return (
      <Fragment>
        <FootStyle>
         计算机1501 贺思阳
        </FootStyle>
      </Fragment>
    );
  }
}
