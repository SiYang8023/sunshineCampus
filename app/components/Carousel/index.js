import React, { Fragment } from 'react';
import 'antd/lib/carousel/style/css';
import { Carousel } from 'antd';
import one from 'images/bg1.jpg';
import two from 'images/bg2.jpg';
import three from 'images/bg3.jpg';
import styled from 'styled-components';

export const CarouselStyle = styled(Carousel)`

`;
/* eslint-disable react/prefer-stateless-function */
export default class Carousels extends React.Component {
  render() {
    return (
      <Fragment>
        <CarouselStyle autoplay>
          <div>
            <img src={three} width="1020px" height="240px"/>
          </div>
          <div>
            <img src={two} width="1020px" height="240px"/>
          </div>
          <div>
            <img src={one} width="1020px" height="240px"/>
          </div>
        </CarouselStyle>
      </Fragment>
    );
  }
}
