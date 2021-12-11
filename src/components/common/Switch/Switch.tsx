import { SwitchProps } from 'antd';
import * as S from './Switch.styles';

export const Switch: React.FC<SwitchProps> = (props) => {
  return <S.Switch {...props} />;
};
