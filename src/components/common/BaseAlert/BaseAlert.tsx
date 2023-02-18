import React from 'react';
import type { AlertProps } from 'antd';
import * as S from './BaseAlert.styles';

export type BaseAlertProps = AlertProps;

export const BaseAlert: React.FC<BaseAlertProps> = (props) => {
  return <S.Alert {...props} />;
};
