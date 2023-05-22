import { PaginationProps } from 'antd';
import * as S from './BasePagination.styles';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => {
  return <S.Pagination {...props} />;
};
