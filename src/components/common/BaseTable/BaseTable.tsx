/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableProps } from 'antd';
import type { RefTable } from 'antd/es/table/interface';
import * as S from './BaseTable.styles';

export type BaseTableProps<T> = TableProps<T>;

// TODO make generic!
export const BaseTable: React.FC<BaseTableProps<any>> = (props) => {
  type StyledTableProps = Parameters<RefTable>[0];
  return <S.Table {...(props as StyledTableProps)} />;
};
