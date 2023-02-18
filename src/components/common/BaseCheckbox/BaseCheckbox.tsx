import React from 'react';
import { CheckboxProps } from 'antd';
import * as S from './BaseCheckbox.styles';

export type BaseCheckboxProps = CheckboxProps;

interface BaseCheckboxInterface extends React.FC<BaseCheckboxProps> {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckbox: BaseCheckboxInterface = (props) => {
  return <S.Checkbox {...props} />;
};

BaseCheckbox.Group = S.CheckboxGroup;
