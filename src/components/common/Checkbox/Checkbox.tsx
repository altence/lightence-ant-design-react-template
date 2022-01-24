import { CheckboxProps } from 'antd';
import * as S from './Checkbox.styles';
import React from 'react';
export const { CheckboxGroup } = S;

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
