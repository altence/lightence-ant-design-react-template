import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { TableRowSelection, ColumnsType } from 'antd/es/table/interface';
import { TreeTableRow, Pagination, getTreeTableData } from 'api/table.api';
import { useTranslation } from 'react-i18next';
import { useMounted } from '@app/hooks/useMounted';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 4,
};

export const TreeTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: TreeTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getTreeTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
      });
    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const rowSelection: TableRowSelection<TreeTableRow> = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TreeTableRow[], info) => {
      console.log(selectedRowKeys, selectedRows, info);
    },
    onSelect: (record: TreeTableRow, selected: boolean, selectedRows: TreeTableRow[]) => {
      console.log(record, selected, selectedRows);
    },
  };

  const columns: ColumnsType<TreeTableRow> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('common.age'),
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
  ];

  return (
    <BaseTable
      columns={columns}
      dataSource={tableData.data}
      rowSelection={rowSelection}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
    />
  );
};
