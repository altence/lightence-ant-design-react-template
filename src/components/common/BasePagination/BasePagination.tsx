import { PaginationProps } from 'antd';
import * as S from './BasePagination.styles';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => {
  // https://github.com/ant-design/ant-design/issues/42418
  return <S.Pagination {...props} />;
};
