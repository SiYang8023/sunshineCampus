import styled from 'styled-components';

export const ImgStyle = styled.div`
  overflow: hidden;
  height: 700px;
`;
export const WrapperContent = styled.div`
  position: relative;
  z-index: 1;
  top: -510px;
  height: 500px;
  text-align: center;
  .title {
    font-family: simsun;
    color: #666;
    font-size: 24px;
    h1 {
      color: #666;
    }
    p {
      margin: -30px auto;
      text-align: center;
      font-size: 30px;
    }
  }
  .content {
    margin-top: 150px;
    display: inline-flex;
  }
  .item {
    width: 400px;
    height: 330px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    color: #555;
    box-shadow: 7px 14px 40px 3px #1d1d1d;
    p {
      margin:0;
      font-size: 20px;
      font-family: sans-serif;
    }
  }
  .anticon {
    color: #52d3aa;
    font-size: 50px;
  }
  .subtitle {
    font-size: 30px;
  }
  .ant-btn {
    width: 100px;
    height: 43px;
    margin: 10px auto;
    background-color: #52d3aa;
    border-color: #52d3aa;
  }
  .ant-btn-primary:hover, .ant-btn-primary:focus {
    background-color: #52d3aa;
    border-color: #52d3aa;
  }
`;

export const FootWrapper = styled.div`
  margin-top: 100px;
  h1 {
    color: #39bc54;
    font-size: 34px;
  }
  .section {
    display: inline-flex;
    width: 50%;
    justify-content: center;
    margin: 20px 0;
  }
  .icon {
    width: 80px;
    height: 80px;
    background: #52d3aa;
    border-radius: 100%;
    margin-right: 50px;
  }
  .anticon {
    color: #fff;
    font-size: 30px;
    line-height: 75px;
  }
  .name {
    color: #212121;
    font-size: 24px;
    line-height: 40px;
  }
  .name:hover {
    color: #52d3aa;
  }
  .brief {
    color: #999;
    font-size: 20px;
    line-height: 40px;
  }
`;