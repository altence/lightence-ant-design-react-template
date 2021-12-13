import { Radio as AntdRadio, RadioProps } from 'antd';
import * as S from './Radio.styles';

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}
export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export const { Button: RadioButton, Group: RadioGroup } = AntdRadio;

export const Radio: React.FC<RadioProps> = (props) => {
  return <S.Radio {...props} />;
};
