import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnStyle = styled.div`
  position: fixed;
  right: 30px;
  top: 100px;
  display: flex;
  flex-direction: column;
  .btn {
    width: 90px;
    height: 60px;
    background: rgb(59, 64, 71);
    color: #fff;
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    border-radius: 4px;
    margin-bottom: 25px;
  }
  .btn:hover {
    box-shadow: 1px 5px 1px 1px rgba(0, 0, 0, 0.16);
  }
  a {
    color: #fff;
  }
`;
/* eslint-disable react/prefer-stateless-function */
export default class RightNav extends React.Component {
  render() {
    return (
      <Fragment>
        <BtnStyle>
          <div className="btn">
            <Link to={{ pathname: '/release_sale', state:'saleInfo' }}>发布二手</Link>
          </div>
          <div className="btn">
            <Link to={{ pathname: '/release_buy', state:'buyInfo' }}>发布求购</Link>
          </div>
        </BtnStyle>
      </Fragment>
    );
  }
}
