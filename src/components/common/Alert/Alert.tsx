import React from 'react';
import { AlertProps } from 'antd';
import * as S from './Alert.styles';

export const Alert: React.FC<AlertProps> = (props) => {
  return <S.Alert {...props} />;
};
