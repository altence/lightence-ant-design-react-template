import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd';
import * as S from './Checkbox.styles';
export const { Group: CheckboxGroup } = AntdCheckbox;

interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <S.Checkbox {...props} />;
};
