import styled from 'styled-components';

export const WrapContent = styled.div`
  width: 1020px;
  margin-top: 84px;
  margin-left: 250px;
  background: #fff;
  display: flex;
  padding: 20px;
  .admin {
    font: 26px 'Microsoft YaHei';
  }
  .all {
    color: #878787;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .item {
    color: rgb(58, 58, 58);
    padding-left: 20px;
    line-height: 30px;
  }
`;

export const TabStyle = styled.div`
  width: 1020px;
  margin-left: 250px;
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  .title {
    border-bottom: 1px solid #1890ff;
    font: 16px 'Microsoft YaHei';
    color: #1890ff;
    padding-bottom: 7px;
    width: 480px;
    margin: 20px;
  }
  .item {
    color: #444;
    font: 14px 'Microsoft YaHei';
    margin: 20px 0px 0px 20px;
  }
  .info {
    margin-right: 50px;
    width: 50px;
    display: inline-block;
  }
  .publish {
    padding: 10px 0;
    text-align: center;
    color: #0099CC;
  }
  .click {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
    border-bottom: 1px solid;
  }
  .ant-btn {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
  .ant-input {
    width: 240px;
  }
`;
