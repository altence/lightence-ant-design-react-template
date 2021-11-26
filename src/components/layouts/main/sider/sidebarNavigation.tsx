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
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    key: 'dashboard',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    title: 'common.apps',
    key: 'apps',
    icon: <HomeOutlined />,
    children: [
      {
        title: 'common.feed',
        key: 'feed',
        url: '/apps/feed',
      },
      {
        title: 'common.kanban',
        key: 'kanban',
        url: '/apps/kanban',
      },
    ],
  },
  {
    title: 'common.authPages',
    key: 'auth',
    icon: <UserOutlined />,
    children: [
      {
        title: 'common.login',
        key: 'login',
        url: '/auth/login',
      },
      {
        title: 'common.signUp',
        key: 'singUp',
        url: '/auth/sign-up',
      },
      {
        title: 'common.lock',
        key: 'lock',
        url: '/auth/lock',
      },
      {
        title: 'common.forgotPass',
        key: 'forgotPass',
        url: '/auth/forgot-password',
      },
      {
        title: 'common.securityCode',
        key: 'securityCode',
        url: '/auth/security-code',
      },
      {
        title: 'common.newPass',
        key: 'newPass',
        url: '/auth/new-password',
      },
    ],
  },
  {
    title: 'common.forms',
    key: 'forms',
    icon: <FormOutlined />,
    children: [
      {
        title: 'common.payment',
        key: 'payment',
        url: '/forms/payment',
      },
    ],
  },
  {
    title: 'common.dataTables',
    key: 'dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },
  {
    title: 'common.charts',
    key: 'charts',
    url: '/charts',
    icon: <LineChartOutlined />,
  },
  {
    title: 'common.maps',
    key: 'maps',
    url: '/maps',
    icon: <CompassOutlined />,
  },
  {
    title: 'common.pages',
    key: 'pages',
    icon: <LayoutOutlined />,
    children: [
      {
        title: 'common.profilePage',
        key: 'profile',
        url: '/profile',
      },
      {
        title: 'common.serverError',
        key: 'serverError',
        url: '/server-error',
      },
      {
        title: 'common.clientError',
        key: '404Error',
        url: '/404',
      },
      {
        title: 'common.maintenance',
        key: 'maintenance',
        url: '/maintenance',
      },
    ],
  },
];
