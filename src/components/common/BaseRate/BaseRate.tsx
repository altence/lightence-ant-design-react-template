import { RateProps } from 'antd';
import * as S from './BaseRate.styles';

export type BaseRateProps = RateProps;

export const BaseRate: React.FC<BaseRateProps> = (props) => {
  return <S.Rate {...props} />;
};
