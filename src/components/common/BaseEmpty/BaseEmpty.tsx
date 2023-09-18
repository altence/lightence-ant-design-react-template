import type { EmptyProps } from 'antd';
import * as S from './BaseEmpty.styles';

export type BaseEmptyProps = EmptyProps;

export const BaseEmpty: React.FC<BaseEmptyProps> = (props) => {
  return <S.Empty {...props} />;
};
