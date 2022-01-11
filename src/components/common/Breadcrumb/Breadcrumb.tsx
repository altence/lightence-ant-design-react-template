import React from 'react';
import { BreadcrumbProps } from 'antd';
import * as S from './Breadcrumb.styles';

export const BreadcrumbItem = S.BreadcrumbItem;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <S.Breadcrumb {...props}>{children}</S.Breadcrumb>;
};
