import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Error500 from '../pages/Error500';
import NewsFeedPage from '../pages/NewsFeedPage';
import ForgotPassword from '../pages/ForgotPassword';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import KanbanPage from 'pages/KanbanPage';
import SignUp from 'pages/SignUp';
import Lock from 'pages/Lock';
import PaymentPage from 'pages/PaymentPage';
import InputCodePage from 'pages/InputCodePage';
import DataTables from 'pages/DataTables';
import Charts from 'pages/Charts';
import Maps from 'pages/Maps';
import Maintenance from 'pages/Maintenance';
import MainLayout from 'components/layouts/main/MainLayout/MainLayout';
import AuthLayout from 'components/layouts/auth/AuthLayout';

export const routes = [
  {
    layout: MainLayout,
    subRoutes: [
      {
        exact: true,
        path: '/',
        component: Dashboard,
      },
      {
        path: '/feed',
        component: NewsFeedPage,
      },
      {
        path: '/kanban',
        component: KanbanPage,
      },
      {
        path: '/payment',
        component: PaymentPage,
      },
      {
        path: '/input-code',
        component: InputCodePage,
      },
      {
        path: '/data-tables',
        component: DataTables,
      },
      {
        path: '/charts',
        component: Charts,
      },
      {
        path: '/maps',
        component: Maps,
      },
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/500',
        component: Error500,
      },
      {
        path: '/maintenance',
        component: Maintenance,
      },
    ],
  },
  {
    layout: AuthLayout,
    subRoutes: [
      {
        path: '/login',
        component: Login,
        exact: true,
      },
      {
        path: '/signup',
        component: SignUp,
        exact: true,
      },
      {
        path: '/lock',
        component: Lock,
        exact: true,
      },
      {
        path: '/forgot-password',
        component: ForgotPassword,
        exact: true,
      },
    ],
  },
  {
    layout: MainLayout,
    subRoutes: [
      {
        path: '*',
        component: Error404,
      },
    ],
  },
];
