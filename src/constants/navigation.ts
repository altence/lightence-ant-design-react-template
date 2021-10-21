import { FC } from 'react';
import {
  CompassOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { TreatmentCalendar } from 'components/dashboard/TreatmentCard/TreatmentCalendar/TreatmentCalendar';
import { NewsFeed } from 'components/NewsFeed/NewsFeed';
import Error404 from 'pages/Error404';
import Error500 from 'pages/Error500';
import Login from 'pages/Login';
import Profile from 'pages/Profile';

interface MenuItem {
  name: string;
  title: string;
  url: string;
  component: FC<any> | undefined;
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
    name: 'common.apps',
    title: 'Apps',
    menus: [
      {
        name: 'common.feed',
        title: 'Feed',
        url: '/apps/#feed',
        component: NewsFeed,
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
        url: '/apps/#kanban',
        component: undefined,
        meta: {
          notifications: {
            count: 0,
            severity: 0,
          },
        },
      },
      {
        name: 'common.calendar',
        title: 'Calendar',
        url: '/apps/#calendar',
        component: TreatmentCalendar,
        meta: {
          notifications: {
            count: 2,
            severity: 1,
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
        component: undefined,
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
        component: undefined,
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
        url: '/forms/#payment',
        component: undefined,
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
        url: '/forms/#input-code',
        component: undefined,
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
    component: undefined,
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
    component: undefined,
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
    component: undefined,
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
        component: undefined,
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
