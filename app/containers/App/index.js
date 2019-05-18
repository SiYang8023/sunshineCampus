/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import MainPage from 'containers/MainPage';
import LoginRegisterPage from 'containers/LoginRegisterPage';
import InfoPage from 'containers/InfoPage';
import ReleaseSale from 'containers/ReleaseSale';
import ReleaseBuy from 'containers/ReleaseBuy';
import GoodsPlay from 'containers/GoodsPlay';
import Management from 'containers/Management';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="sunshine校园二手" defaultTitle="sunshine校园二手">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sunshineCampus" component={MainPage} />
        <Route path="/login" component={LoginRegisterPage} />
        <Route path="/register" component={LoginRegisterPage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/release_sale" component={ReleaseSale} />
        <Route path="/release_buy" component={ReleaseBuy} />
        <Route path="/sale/:id" component={GoodsPlay} />
        <Route path="/management" component={Management} />
        {/* <Route path="/features" component={FeaturePage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
