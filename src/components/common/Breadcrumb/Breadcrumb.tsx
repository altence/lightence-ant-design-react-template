import React from 'react';
import { BreadcrumbProps, BreadcrumbItemProps } from 'antd';
import * as S from './Breadcrumb.styles';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, ...props }) => {
  return <S.BreadcrumbItem {...props}>{children}</S.BreadcrumbItem>;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <S.Breadcrumb {...props}>{children}</S.Breadcrumb>;
};
