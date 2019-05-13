import styled from 'styled-components';

export const InfoStyle = styled.div`
  width: 1020px;
  background: #fff;
  margin: 100px auto;
  padding: 25px;
  margin-bottom: 20px;
  .anticon {
    font-size: 30px;
    margin-right: 15px;
  }
  .info {
    font-size: 20px;
    color: rgb(58, 58, 58);
    margin-left: 70px;
    line-height: 50px;
  }
  .title {
    font-weight: bold;
  }
  .price {
    color: red;
    font-weight: bold;
    font-size: 26px;
  }
`;

export const BriefStyle = styled.div`
  width: 1020px;
  background: #fff;
  margin: auto;
  padding: 25px 40px;
  display: flex;
  margin-bottom: 20px;
  img {
    border-radius: 100%;
    height: 80px;
    width: 80px;
  }
  .brief {
    margin-left: 50px;
    font-size: 15px;
    line-height: 25px;
  }
`;

export const CommentStyle = styled.div`
  width: 1020px;
  background: #fff;
  margin: auto;
  margin-bottom: 20px;
  .btn {
    width: 100px;
    border-radius: 0px;
    height: 38px;
    font-size: 20px;
    font-weight: bold;
  }
  .comment {
    padding: 20px;
  }
  .ant-avatar-image {
    width: 60px;
    height: 60px;
  }
  .ant-comment-avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const RecommendStyle = styled.div`
  width: 1020px;
  background: #fff;
  margin: auto;
  margin-bottom: 50px;
  .btn {
    width: 100px;
    border-radius: 0px;
    height: 38px;
    font-size: 20px;
    font-weight: bold;
  }
  .ant-col-6 {
    width: 23%;
    margin: 10px;
  }
  .items {
    border: 1px solid #ddd;
    margin: 10px;
    width: 202px;
  }
  .items:hover {
    border: 1px solid #1890ff;
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
`;