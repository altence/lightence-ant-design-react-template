import React from 'react';
import { Space } from 'antd';
import { Table } from 'components/common/Table/Table';
import * as S from './BasicTable.styles';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag: string) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <S.Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </S.Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: { name?: string }) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <S.Delete>Delete</S.Delete>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export const BasicTable: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};
