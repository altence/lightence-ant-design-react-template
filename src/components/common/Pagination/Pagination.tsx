import { PaginationProps } from 'antd';
import * as S from './Pagination.styles';

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <S.Pagination {...props} />;
};
