import React from 'react';
import { Input, InputProps, InputRef } from 'antd';
import * as S from './BaseInput.styles';

export type BaseInputRef = InputRef;

export type BaseInputProps = InputProps;

interface BaseInputInterface extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> {
  Group: typeof Input.Group;
  Search: typeof Input.Search;
  TextArea: typeof Input.TextArea;
  Password: typeof Input.Password;
}

const InternalInput = React.forwardRef<BaseInputRef, BaseInputProps>(({ className, children, ...props }, ref) => (
  <S.Input ref={ref} className={className} {...props}>
    {children}
  </S.Input>
));

export const BaseInput = InternalInput as BaseInputInterface;

BaseInput.Group = Input.Group;
BaseInput.Search = Input.Search;
BaseInput.TextArea = Input.TextArea;
BaseInput.Password = Input.Password;
