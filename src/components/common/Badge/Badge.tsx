import React from 'react';
import { BadgeProps as AntBadgeProps } from 'antd';
import * as S from './Badge.styles';

export type BadgeType = 'warning' | 'error' | 'success' | 'default' | undefined;

interface BadgeProps extends AntBadgeProps {
  className?: string;
  severity?: BadgeType;
}

export const Badge: React.FC<BadgeProps> = ({ className, severity, children, ...props }) => (
  <S.Badge className={className} severity={severity} {...props}>
    {children}
  </S.Badge>
);
