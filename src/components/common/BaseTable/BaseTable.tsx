import type { ComponentProps, FC } from 'react';
import { Table } from 'antd';
import * as S from './BaseTable.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseTableProps = ComponentProps<typeof Table<any>>;

// TODO make generic!
export const BaseTable: FC<BaseTableProps> = (props) => {
  return <S.Table {...props} />;
};
