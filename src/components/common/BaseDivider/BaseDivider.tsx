import type { DividerProps } from 'antd';
import * as S from './BaseDivider.styles';

export type BaseDividerProps = DividerProps;

export const BaseDivider: React.FC<BaseDividerProps> = (props) => {
  return <S.Divider {...props} />;
};
