import React from 'react';
import { Card, CardProps } from 'components/common/Card/Card';
import { useResponsive } from 'hooks/useResponsive';

interface DashboardPaddings {
  xs: [number, number];
  md: [number, number];
  xl: [number, number];
}

export const dashboardPaddings: DashboardPaddings = {
  xs: [20, 15],
  md: [20, 20],
  xl: [20, 20],
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
