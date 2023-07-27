import { PaginationProps, ConfigProvider } from 'antd';
import * as S from './BasePagination.styles';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => (
  <ConfigProvider theme={{ components: { Pagination: { wireframe: props.size !== 'small' } } }}>
    <S.Pagination {...props} />
  </ConfigProvider>
);
