import React from 'react';
import 'antd/lib/table/style/css';
import 'antd/lib/popconfirm/style/css';
import { Button, Table, Popconfirm } from 'antd';
import styled from 'styled-components';

export const TableStyle = styled(Table)`
 .ant-table {
    background: #fff;
 }
 .ant-spin-container {
    width: 1000px;
    margin: 100px auto;
 }
`;

/* eslint-disable react/prefer-stateless-function */
export default class Management extends React.Component {

  state = {
    pagination: {},
  };

  // 回到页面顶部
  componentDidMount() {
    this.node.scrollIntoView();
  };

  handleDelete = key => {
    console.log(key);
  };

  render() {
    const columns = [
        {
          title: '名称',
          dataIndex: 'name',
          render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: '价格',
          dataIndex: 'money',
        },
        {
          title: '图片',
          dataIndex: 'address',
        },
        {
            title:'操作',
            dataIndex: 'operation',
            render: (text, record) =>
            (
             <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            <a href="javascript:;">Delete</a>
          </Popconfirm>
            )
        }
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          money: '￥1,256,000.00',
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          money: '￥120,000.00',
          address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Joe Black',
            money: '￥120,000.00',
            address: 'Sidney No. 1 Lake Park',
        },
      ];
    return (
      <div ref={node => this.node = node}>
        <TableStyle
          columns={columns}
          dataSource={data}
          bordered
          pagination={this.state.pagination}
          title={() => '所有商品信息'}
        />
      </div>
    );
  }
};