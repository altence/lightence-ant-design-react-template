import React from 'react';
import { TableProps } from 'antd';
import * as S from './Table.styles';
// eslint-disable-next-line
export const Table: React.FC<TableProps<any>> = (props) => {
  return <S.Table {...props} />;
};
