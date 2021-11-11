import React from 'react';
import { Card, CardProps } from 'components/common/Card/Card';
import { useResponsive } from 'hooks/useResponsive';

const dashboardPaddings = {
  xs: '1.875rem 1rem 1.25rem 1rem',
  md: '1.875rem 1.25rem 1.25rem 1.25rem',
  xl: '1.875rem 1.25rem 1.625rem 1.25rem',
};

export const DashboardCard: React.FC<CardProps> = ({ children, ...props }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const responsivePaddings =
    (isDesktop && dashboardPaddings.xl) ||
    (isTablet && dashboardPaddings.md) ||
    (isMobile && dashboardPaddings.xs) ||
    dashboardPaddings.xs;

  return (
    <Card padding={responsivePaddings} {...props}>
      {children}
    </Card>
  );
};
