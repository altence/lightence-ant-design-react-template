import React from 'react';
import { CheckboxProps, CheckboxRef } from 'antd';
import * as S from './BaseCheckbox.styles';

export type BaseCheckboxRef = CheckboxRef;

export type BaseCheckboxProps = CheckboxProps;

const Checkbox = React.forwardRef<BaseCheckboxRef, BaseCheckboxProps>((props, ref) => {
  return <S.Checkbox {...props} ref={ref} />;
});

type CheckboxForwardRef = typeof Checkbox;

interface BaseCheckboxInterface extends CheckboxForwardRef {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckbox = Checkbox as BaseCheckboxInterface;

BaseCheckbox.Group = S.CheckboxGroup;
