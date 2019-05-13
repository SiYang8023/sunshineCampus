import styled from 'styled-components';

export const LoginRegister = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  padding: 30px;
  box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
  .title {
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .ant-checkbox-wrapper {
    color: #fff;
  }
  a {
    color: #fff;
    font-size: 14px;
    font-family: Georgia, Times, 'Times New Roman', serif;
    margin-right: 10px;
  }
  .ant-btn {
    width: 100%;
    margin-top: 10px;
  }
  .anticon {
    color: #666;
  }
  .vcodewrap {
    text-shadow: 6px 2px 2px #333;
    background: #fff;
    display: inline-flex;
    position: absolute;
    letter-spacing: 8px;
    height: 30px;
    top: -6px;
    right: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    line-height: 32px;
    padding-left: 10px;
    width: 85px;
  }
  .validate {
    position: relative;
    top: -20px;
    margin-bottom: -10px;
    color:#f5222d;
  }
`;
