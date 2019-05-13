/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import 'antd/lib/date-picker/style/css';
import { Icon, Button } from 'antd';
import home from 'images/home.jpg';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { WrapperContent, ImgStyle, FootWrapper } from './style';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <Fragment>
        <ImgStyle>
          <img src = {home} />
        </ImgStyle>
        <WrapperContent>
          <div className="title">
            <h1>Sunshine校园</h1>
            <p>— 专注校园二手 —</p>
          </div>
          <div className="content">
            <div className="item">
              <Icon type="rest" theme="filled" />
              <div className="subtitle">校园二手</div>
              <p>带不走的东西，丢不掉的记忆</p>
              <p>让sunshine，帮它找到新的主人</p>
              <Button type="primary">
                <Link to={{pathname:'/sunshineCampus/sale',state:'sale'}}>校园二手</Link>
              </Button>
            </div>
          </div>
          <div className="content">
            <div className="item">
              <Icon type="shop" theme="filled" />
              <div className="subtitle">校园求购</div>
              <p>众里寻它，蓦然回首</p>
              <p>原来它就在这里－sunshine校园</p>
              <Button type="primary">
                <Link to={{pathname:'/sunshineCampus/buy',state:'buy'}}>校园求购</Link>
              </Button>
            </div>
          </div>
          <FootWrapper>
            <h1>专注校园二手</h1>
            <div>
              <div className="section">
                <div className="icon">
                  <Icon type="safety-certificate" theme="filled" />
                </div>
                <div>
                  <div className="name">安全</div>
                  <div className="brief">当面沟通，信息对称，确保安全。</div>
                </div>
              </div>
              <div className="section">
                <div className="icon">
                  <Icon type="like" theme="filled" />
                </div>
                <div>
                  <div className="name">快捷</div>
                  <div className="brief">同校交易，省去物流，不用等待。</div>
                </div>
              </div>
              <div className="section">
                <div className="icon">
                  <Icon type="trophy" theme="filled" />
                </div>
                <div>
                  <div className="name">简单</div>
                  <div className="brief">简单注册，简洁发布，一键到底。</div>
                </div>
              </div>
              <div className="section">
                <div className="icon">
                  <Icon type="read" theme="filled" />
                </div>
                <div>
                  <div className="name">方便</div>
                  <div className="brief">一目了然，分类明晰，快速搜索。</div>
                </div>
              </div>
            </div>
          </FootWrapper>
        </WrapperContent>
      </Fragment>
      // <article>
      //   <Helmet>
      //     <title>Sunshine 校园二手</title>
      //     <meta
      //       name="description"
      //       content="A React.js Boilerplate application homepage"
      //     />
      //   </Helmet>
      //   <div>
      //     <CenteredSection>
      //       <H2>
      //         <FormattedMessage {...messages.startProjectHeader} />
      //       </H2>
      //       <p>
      //         <FormattedMessage {...messages.startProjectMessage} />
      //       </p>
      //     </CenteredSection>
      //     <Section>
      //       <H2>
      //         <FormattedMessage {...messages.trymeHeader} />
      //       </H2>
      //       <Form onSubmit={this.props.onSubmitForm}>
      //         <label htmlFor="username">
      //           <FormattedMessage {...messages.trymeMessage} />
      //           <AtPrefix>
      //             <FormattedMessage {...messages.trymeAtPrefix} />
      //           </AtPrefix>
      //           <Input
      //             id="username"
      //             type="text"
      //             placeholder="mxstbr"
      //             value={this.props.username}
      //             onChange={this.props.onChangeUsername}
      //           />
      //         </label>
      //       </Form>
      //       <ReposList {...reposListProps} />
      //     </Section>
      //   </div>
      // </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
