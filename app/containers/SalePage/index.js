import React from 'react';
import LeftNav from 'components/LeftNav';
import Carousels from 'components/Carousel';
import RightNav from 'components/RightNav';
import Rank from 'components/Rank';
import Goods from 'components/Goods';
import Foot from 'components/Foot';
import { WrapContent } from './style';

/* eslint-disable react/prefer-stateless-function */
export default class SalePage extends React.Component {
  // 回到页面顶部
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        {/* <LeftNav /> */}
        <WrapContent>
          <Carousels />
          <Rank />
          <Goods />
          {/* SalePage */}
        </WrapContent>
        <Foot />
        {/* <RightNav /> */}
      </div>
    );
  }
};