import { TableProps as BaseTableProps } from 'antd';
import * as S from './BaseTable.styles';

export type { BaseTableProps };

// TODO make generic!
// eslint-disable-next-line @typescript-eslint/ban-types
export const BaseTable = <T extends object>(props: BaseTableProps<T>): JSX.Element => {
  return <S.Table {...props} />;
};
