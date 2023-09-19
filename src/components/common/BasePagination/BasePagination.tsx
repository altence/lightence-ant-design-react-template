import { PaginationProps, ConfigProvider } from 'antd';
import * as S from './BasePagination.styles';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => {
  const wireframe = props.size !== 'small';

  return (
    <ConfigProvider theme={{ components: { Pagination: { wireframe } } }}>
      <S.Pagination {...props} />
    </ConfigProvider>
  );
};
