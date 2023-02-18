import { SwitchProps } from 'antd';
import * as S from './BaseSwitch.styles';

export type BaseSwitchProps = SwitchProps;

export const BaseSwitch: React.FC<SwitchProps> = (props) => {
  return <S.Switch {...props} />;
};
