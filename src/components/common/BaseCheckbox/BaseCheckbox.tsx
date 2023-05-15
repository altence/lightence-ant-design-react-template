import React from 'react';
import { CheckboxProps as BaseCheckboxProps } from 'antd';
import * as S from './BaseCheckbox.styles';

export type { BaseCheckboxProps };

const Checkbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>((props, ref) => {
  return <S.Checkbox {...props} ref={ref} />;
});

type CheckboxForwardRef = typeof Checkbox;

interface BaseCheckboxInterface extends CheckboxForwardRef {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckbox = Checkbox as BaseCheckboxInterface;

BaseCheckbox.Group = S.CheckboxGroup;
