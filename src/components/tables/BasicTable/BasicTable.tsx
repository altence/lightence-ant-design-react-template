import React, { useEffect, useState } from 'react';
import { Space, TablePaginationConfig } from 'antd';
import * as S from './BasicTable.styles';
import { BasicTableRow, getBasicTableData, Pagination } from 'api/table.api';
import { Table } from 'components/common/Table/Table';
import { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<BasicTableRow> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
    filterMode: 'tree',
    filters: [
      {
        text: 'First name',
        value: 'firstName',
        children: [
          {
            text: 'Joe',
            value: 'Joe',
          },
          {
            text: 'Pavel',
            value: 'Pavel',
          },
          {
            text: 'Jim',
            value: 'Jim',
          },
          {
            text: 'Josh',
            value: 'Josh',
          },
        ],
      },
      {
        text: 'Last name',
        value: 'lastName',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
          {
            text: 'Brown',
            value: 'Brown',
          },
        ],
      },
    ],
    onFilter: (value: string | number | boolean, record: BasicTableRow) => record.name.includes(value.toString()),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
    showSorterTooltip: false,
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    dataIndex: 'action',
    render: (text: string, record: { name?: string }) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <S.Delete>Delete</S.Delete>
      </Space>
    ),
  },
];

export const BasicTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: {
      current: 1,
      pageSize: 3,
    },
    loading: false,
  });

  useEffect(() => {
    fetch(tableData.pagination);
  }, []);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    fetch(pagination);
  };

  const fetch = (pagination: Pagination) => {
    setTableData({ ...tableData, loading: true });
    getBasicTableData(pagination).then((res) => {
      setTableData({ data: res.data, pagination: res.pagination, loading: false });
    });
  };

  return (
    <Table
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
    />
  );
};
