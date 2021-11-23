import React from 'react';
import { TableProps } from 'antd';
import { DefaultRecordType } from 'rc-table/lib/interface';
import * as S from './Table.styles';

export const Table: React.FC<TableProps<DefaultRecordType>> = (props) => {
  return <S.Table {...props} />;
};
