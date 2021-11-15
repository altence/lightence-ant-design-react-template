import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    title: 'common.apps',
    icon: <HomeOutlined />,
    children: [
      {
        title: 'common.feed',
        url: '/apps/feed',
      },
      {
        title: 'common.kanban',
        url: '/apps/kanban',
      },
    ],
  },
  {
    title: 'common.authPages',
    icon: <UserOutlined />,
    children: [
      {
        title: 'common.login',
        url: '/auth/login',
      },
      {
        title: 'common.signUp',
        url: '/auth/sign-up',
      },
      {
        title: 'common.lock',
        url: '/auth/lock',
      },
      {
        title: 'common.forgotPass',
        url: '/auth/forgot-password',
      },
    ],
  },
  {
    title: 'common.forms',
    icon: <FormOutlined />,
    children: [
      {
        title: 'common.payment',
        url: '/forms/payment',
      },
      {
        title: 'common.securityCode',
        url: '/forms/security-code',
      },
    ],
  },
  {
    title: 'common.dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },
  {
    title: 'common.charts',
    url: '/charts',
    icon: <LineChartOutlined />,
  },
  {
    title: 'common.maps',
    url: '/maps',
    icon: <CompassOutlined />,
  },
  {
    title: 'common.pages',
    icon: <LayoutOutlined />,
    children: [
      {
        title: 'common.profilePage',
        url: '/profile',
      },
      {
        title: 'common.serverError',
        url: '/server-error',
      },
      {
        title: 'common.clientError',
        url: '/404',
      },
      {
        title: 'common.maintenance',
        url: '/maintenance',
      },
    ],
  },
];
