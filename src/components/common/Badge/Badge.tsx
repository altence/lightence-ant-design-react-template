import React from 'react';
import { BadgeProps as AntBadgeProps } from 'antd';
import { NoticeType } from '../Notice/Notice';
import * as S from './Badge.styles';

interface BadgeProps extends AntBadgeProps {
  className?: string;
  severity?: NoticeType;
}

export const Badge: React.FC<BadgeProps> = ({ className, severity, children, ...props }) => (
  <S.Badge className={className} {...(severity && { severity })} {...props}>
    {children}
  </S.Badge>
);
