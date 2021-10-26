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
import Error404 from 'pages/Error404';
import ServerError from 'pages/ServerError';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import SignUp from 'pages/SignUp';
import Lock from 'pages/Lock';
import DataTables from 'pages/DataTables';
import Charts from 'pages/Charts';
import Maps from 'pages/Maps';
import Maintenance from 'pages/Maintenance';
import NewsFeedPage from 'pages/NewsFeedPage';
import KanbanPage from 'pages/KanbanPage';
import PaymentPage from 'pages/PaymentPage';
import InputCodePage from 'pages/InputCodePage';
import Dashboard from 'pages/Dashboard';

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
    component: Dashboard,
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
        component: Login,
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
        component: SignUp,
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
        component: Lock,
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
    component: DataTables,
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
    component: Charts,
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
    component: Maps,
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
        component: Profile,
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
        component: ServerError,
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
        component: Error404,
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
        component: Maintenance,
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
