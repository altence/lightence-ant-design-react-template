import React from 'react';
import { PopconfirmProps } from 'antd';
import * as S from './Popconfirm.styles';

export const Popconfirm: React.FC<PopconfirmProps> = ({ children, ...props }) => {
  return <S.Popconfirm {...props}>{children}</S.Popconfirm>;
};
