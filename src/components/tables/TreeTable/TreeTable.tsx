import React, { useState, useEffect } from 'react';
import { Table } from 'components/common/Table/Table';
import { TablePaginationConfig } from 'antd';
import { Key, DefaultRecordType } from 'rc-table/lib/interface';
import { TreeTableRow, Pagination, getTreeTableData } from 'api/table.api';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

export const TreeTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: TreeTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: {
      current: 1,
      pageSize: 4,
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
    getTreeTableData(pagination).then((res) => {
      setTableData({ data: res.data, pagination: res.pagination, loading: false });
    });
  };

  const rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: DefaultRecordType[]) => {
      console.log(selectedRowKeys, selectedRows);
    },
    onSelect: (record: DefaultRecordType, selected: boolean, selectedRows: DefaultRecordType[]) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected: boolean, selectedRows: DefaultRecordType[]) => {
      console.log(selected, selectedRows);
    },
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData.data}
        rowSelection={{ ...rowSelection }}
        pagination={tableData.pagination}
        loading={tableData.loading}
        onChange={handleTableChange}
        scroll={{ x: 800 }}
      />
    </>
  );
};
