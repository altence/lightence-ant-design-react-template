import React, { useEffect, useState } from 'react';
import { Space, TablePaginationConfig, notification } from 'antd';
import * as S from './BasicTable.styles';
import { BasicTableRow, getBasicTableData, Pagination, Tag } from 'api/table.api';
import { Table } from 'components/common/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '../../../utils/utils';

export const BasicTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: {
      current: 1,
      pageSize: 5,
    },
    loading: false,
  });
  const { t } = useTranslation();

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

  const handleDeleteRow = (rowId: number) => {
    setTableData({ ...tableData, data: tableData.data.filter((item) => item.key !== rowId) });
  };

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('tables.name'),
      dataIndex: 'name',
      render: (text: string) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: t('tables.firstName'),
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
          text: t('tables.lastName'),
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
      title: t('tables.age'),
      dataIndex: 'age',
      sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: t('tables.address'),
      dataIndex: 'address',
    },
    {
      title: t('tables.tags'),
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: Tag[]) => (
        <>
          {tags.map((tag: Tag) => {
            return (
              <S.Tag color={defineColorByPriority(tag.priority)} key={tag.value}>
                {tag.value.toUpperCase()}
              </S.Tag>
            );
          })}
        </>
      ),
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <Space>
            <Button
              type="ghost"
              onClick={() => {
                notification.open({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('tables.invite')}
            </Button>
            <Button type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
      bordered
    />
  );
};
