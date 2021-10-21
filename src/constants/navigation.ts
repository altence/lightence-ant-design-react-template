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
import Error500 from 'pages/Error500';
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
    name: 'common.dashboard',
    title: 'Dashboard',
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
    name: 'common.apps',
    title: 'Apps',
    menus: [
      {
        name: 'common.feed',
        title: 'Feed',
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
        name: 'common.kanban',
        title: 'Kanban',
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
    name: 'common.auth',
    title: 'Auth',
    menus: [
      {
        name: 'common.loginPage',
        title: 'Login page',
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
        name: 'common.signUpPage',
        title: 'Sign up page',
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
        name: 'common.lockPage',
        title: 'Lock page',
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
    name: 'common.forms',
    title: 'Forms',
    menus: [
      {
        name: 'common.payment',
        title: 'Payment',
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
        name: 'common.inputCode',
        title: 'Input 6 digit code',
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
    name: 'common.dataTables',
    title: 'Data tables',
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
    name: 'common.charts',
    title: 'Charts',
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
    name: 'common.maps',
    title: 'Maps',
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
    name: 'common.pages',
    title: 'Pages',
    menus: [
      {
        name: 'common.profilePage',
        title: 'Profile Page',
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
        name: 'common.serverError',
        title: 'Server Error',
        url: '/500',
        component: Error500,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'common.clientError',
        title: 'Client Error',
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
        name: 'common.maintenance',
        title: 'Maintenance',
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
