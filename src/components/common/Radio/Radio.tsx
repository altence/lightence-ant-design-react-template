import { Radio as AntdRadio, RadioProps } from 'antd';
import * as S from './Radio.styles';

export const { Button: RadioButton, Group: RadioGroup } = AntdRadio;

export const Radio: React.FC<RadioProps> = (props) => {
  return <S.Radio {...props} />;
};
