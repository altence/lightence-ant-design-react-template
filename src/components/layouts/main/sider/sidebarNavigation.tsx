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
        title: 'common.newPassword',
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
      {
        title: 'common.advancedForms',
        key: 'advanced-forms',
        url: '/forms/advanced-forms',
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
        url: '/profile/personal-info',
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
  {
    title: 'common.ui',
    key: 'ui',
    icon: <LayoutOutlined />,
    children: [
      {
        title: 'common.buttonPage',
        key: 'buttons',
        url: '/ui-components/buttons',
      },
      {
        title: 'common.spinnerPage',
        key: 'spinners',
        url: '/ui-components/spinners',
      },
      {
        title: 'common.avatarsPage',
        key: 'avatars',
        url: '/ui-components/avatars',
      },
      {
        title: 'common.badgesPage',
        key: 'badges',
        url: '/ui-components/badges',
      },
      {
        title: 'common.paginationPage',
        key: 'pagination',
        url: '/ui-components/pagination',
      },
      {
        title: 'common.collapsePage',
        key: 'collapse',
        url: '/ui-components/collapse',
      },
      {
        title: 'common.modalsPage',
        key: 'modals',
        url: '/ui-components/modals',
      },
      {
        title: 'common.popoversPage',
        key: 'popovers',
        url: '/ui-components/popovers',
      },
      {
        title: 'common.popconfirmsPage',
        key: 'popconfirms',
        url: '/ui-components/popconfirms',
      },
      {
        title: 'common.progressPage',
        key: 'progress',
        url: '/ui-components/progress',
      },
      {
        title: 'common.resultsPage',
        key: 'results',
        url: '/ui-components/results',
      },
      {
        title: 'common.alertsPage',
        key: 'alerts',
        url: '/ui-components/alerts',
      },
      {
        title: 'common.skeletonsPage',
        key: 'skeletons',
        url: '/ui-components/skeletons',
      },
      {
        title: 'common.inputsPage',
        key: 'inputs',
        url: '/ui-components/inputs',
      },
      {
        title: 'common.checkboxesPage',
        key: 'checkboxes',
        url: '/ui-components/checkboxes',
      },
      {
        title: 'common.radiosPage',
        key: 'radios',
        url: '/ui-components/radios',
      },
      {
        title: 'common.selectsPage',
        key: 'selects',
        url: '/ui-components/selects',
      },
    ],
  },
];
