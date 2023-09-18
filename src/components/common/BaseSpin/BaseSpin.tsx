import type { SpinProps } from 'antd';
import * as S from './BaseSpin.styles';

export type BaseSpinProps = SpinProps;

export const BaseSpin: React.FC<BaseSpinProps> = (props) => {
  return <S.Spin {...props} />;
};
