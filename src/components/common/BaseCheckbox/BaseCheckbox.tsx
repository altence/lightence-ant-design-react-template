import React from 'react';
import { CheckboxProps } from 'antd';
import * as S from './BaseCheckbox.styles';

export type BaseCheckboxProps = CheckboxProps;

interface BaseCheckboxInterface
  extends React.ForwardRefExoticComponent<BaseCheckboxProps & React.RefAttributes<HTMLInputElement>> {
  Group: typeof S.CheckboxGroup;
}

const Checkbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>((props, ref) => {
  return <S.Checkbox {...props} ref={ref} />;
});

export const BaseCheckbox = Checkbox as BaseCheckboxInterface;

BaseCheckbox.Group = S.CheckboxGroup;
