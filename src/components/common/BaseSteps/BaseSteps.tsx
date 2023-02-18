import { StepsProps } from 'antd';
import * as S from './BaseSteps.styles';

export type BaseStepsProps = StepsProps;

export const BaseSteps: React.FC<BaseStepsProps> = ({ children, ...otherProps }) => {
  return <S.Steps {...otherProps}>{children}</S.Steps>;
};
