import styled from 'styled-components';

export const LeftNavStyle = styled.div`
  width: 140px;
  margin-top: 52px;
  position: fixed;
  .ant-menu-item, .ant-menu-submenu-title {
    padding-left: 10px !important;
  }
  .ant-menu-inline-collapsed {
    width: 46px;
  }
  .ant-menu-inline-collapsed > .ant-menu-item {
    padding: 0px 15px !important;
  }
  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0px 15px !important;
  }
  .ant-menu-dark {
    background: rgb(62, 67, 74);
  }
  .anticon {
    vertical-align: middle;
  }
`;