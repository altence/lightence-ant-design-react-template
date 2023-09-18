import { Table } from 'antd';
import * as S from './BaseTable.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseTableProps = React.ComponentProps<typeof Table<any>>;

// TODO make generic!
export const BaseTable: React.FC<BaseTableProps> = (props) => {
  return <S.Table {...props} />;
};
