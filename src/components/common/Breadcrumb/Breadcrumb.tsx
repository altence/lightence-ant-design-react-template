import React from 'react';
import { Breadcrumb as AntdBreadcrumb, BreadcrumbProps } from 'antd';
import * as S from './Breadcrumb.styles';

export const { Item: BreadcrumbItem } = AntdBreadcrumb;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, ...props }) => {
  return <S.Breadcrumb {...props}>{children}</S.Breadcrumb>;
};
