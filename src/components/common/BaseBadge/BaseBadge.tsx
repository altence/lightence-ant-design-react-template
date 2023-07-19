import React from 'react';
import { BadgeProps, Badge } from 'antd';
import { mapBadgeStatus } from '@app/utils/utils';
import * as S from './BaseBadge.styles';

export type BaseBadgeProps = BadgeProps;

interface BaseBadgeInterface extends React.FC<BaseBadgeProps> {
  Ribbon: typeof Badge.Ribbon;
}

export const BaseBadge: BaseBadgeInterface = ({ status, children, count, ...props }) => {
  const countSeverityStatus = count ? { count, $severity: mapBadgeStatus(status) } : { status };
  const transformedProps = status ? countSeverityStatus : { count };
  return (
    <S.Badge {...transformedProps} {...props}>
      {children}
    </S.Badge>
  );
};

BaseBadge.Ribbon = Badge.Ribbon;
