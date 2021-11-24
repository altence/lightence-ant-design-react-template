/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableProps } from 'antd';
import * as S from './Table.styles';

export const Table: React.FC<TableProps<any>> = (props) => {
  return <S.Table {...props} />;
};
