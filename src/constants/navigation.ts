/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
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
import Error404Page from 'pages/Error404Page';
import ServerErrorPage from 'pages/ServerErrorPage';
import ProfilePage from 'pages/ProfilePage';
import SignUpPage from 'pages/SignUpPage';
import LockPage from 'pages/LockPage';
import DataTablesPage from 'pages/DataTablesPage';
import ChartsPage from 'pages/ChartsPage';
import MapsPage from 'pages/MapsPage';
import MaintenancePage from 'pages/MaintenancePage';
import NewsFeedPage from 'pages/NewsFeedPage';
import KanbanPage from 'pages/KanbanPage';
import PaymentPage from 'pages/PaymentPage';
import InputCodePage from 'pages/InputCodePage';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';

interface MenuItem {
  name: string;
  title: string;
  url: string;
  component: FC<any>;
  meta: {
    notifications: {
      count: number;
      severity: number;
    };
  };
}

export interface NavItem {
  name: string;
  title: string;
  url?: string;
  component?: FC<any> | undefined;
  meta?: {
    notifications: {
      count: number;
      severity: number;
    };
  };
  menus?: MenuItem[];
  icon: FC;
}

export const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    title: 'common.dashboard',
    url: '/',
    component: DashboardPage,
    meta: {
      notifications: {
        count: 4,
        severity: 1,
      },
    },
    icon: DashboardOutlined,
  },
  {
    name: 'Apps',
    title: 'common.apps',
    menus: [
      {
        name: 'Feed',
        title: 'common.feed',
        url: '/feed',
        component: NewsFeedPage,
        meta: {
          notifications: {
            count: 1,
            severity: 2,
          },
        },
      },
      {
        name: 'Kanban',
        title: 'common.kanban',
        url: '/kanban',
        component: KanbanPage,
        meta: {
          notifications: {
            count: 2,
            severity: 3,
          },
        },
      },
    ],
    icon: HomeOutlined,
  },
  {
    name: 'Auth',
    title: 'common.auth',
    menus: [
      {
        name: 'Login page',
        title: 'common.loginPage',
        url: '/login',
        component: LoginPage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Sign up page',
        title: 'common.signUpPage',
        url: '/signup',
        component: SignUpPage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Lock page',
        title: 'common.lockPage',
        url: '/lock',
        component: LockPage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
    ],
    icon: UserOutlined,
  },
  {
    name: 'Forms',
    title: 'common.forms',
    menus: [
      {
        name: 'Payment',
        title: 'common.payment',
        url: '/payment',
        component: PaymentPage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Input 6 digit code',
        title: 'common.inputCode',
        url: '/input-code',
        component: InputCodePage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
    ],
    icon: FormOutlined,
  },
  {
    name: 'Data tables',
    title: 'common.dataTables',
    url: '/data-tables',
    component: DataTablesPage,
    meta: {
      notifications: {
        count: 0,
        severity: 0,
      },
    },
    icon: TableOutlined,
  },
  {
    name: 'Charts',
    title: 'common.charts',
    url: '/charts',
    component: ChartsPage,
    meta: {
      notifications: {
        count: 0,
        severity: 0,
      },
    },
    icon: LineChartOutlined,
  },
  {
    name: 'Maps',
    title: 'common.maps',
    url: '/maps',
    component: MapsPage,
    meta: {
      notifications: {
        count: 0,
        severity: 0,
      },
    },
    icon: CompassOutlined,
  },
  {
    name: 'Pages',
    title: 'common.pages',
    menus: [
      {
        name: 'Profile Page',
        title: 'common.profilePage',
        url: '/profile',
        component: ProfilePage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Server Error',
        title: 'common.serverError',
        url: '/500',
        component: ServerErrorPage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Client Error',
        title: 'common.clientError',
        url: '/404',
        component: Error404Page,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'Maintenance',
        title: 'common.maintenance',
        url: '/maintenance',
        component: MaintenancePage,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
    ],
    icon: LayoutOutlined,
  },
];
