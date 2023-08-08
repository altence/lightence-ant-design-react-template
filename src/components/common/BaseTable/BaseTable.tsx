import { TableProps } from 'antd';
import * as S from './BaseTable.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRecord = Record<PropertyKey, any>;

export type BaseTableProps<T extends AnyRecord> = TableProps<T>;

// TODO make generic!
export const BaseTable = <T extends AnyRecord>(props: BaseTableProps<T>): React.JSX.Element => {
  return <S.Table {...props} />;
};
