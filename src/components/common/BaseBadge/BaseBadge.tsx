import React from 'react';
import { BadgeProps, Badge } from 'antd';
import * as S from './BaseBadge.styles';

export type BaseBadgeProps = BadgeProps;

interface BaseBadgeInterface extends React.FC<BaseBadgeProps> {
  Ribbon: typeof Badge.Ribbon;
}

export const BaseBadge: BaseBadgeInterface = ({ children, ...props }) => {
  return <S.Badge {...props}>{children}</S.Badge>;
};

BaseBadge.Ribbon = Badge.Ribbon;
