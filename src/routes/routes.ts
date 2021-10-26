import DashboardPage from '../pages/DashboardPage';
import Error404Page from '../pages/Error404Page';
import ServerErrorPage from '../pages/ServerErrorPage';
import NewsFeedPage from '../pages/NewsFeedPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import KanbanPage from 'pages/KanbanPage';
import SignUpPage from 'pages/SignUpPage';
import LockPage from 'pages/LockPage';
import PaymentPage from 'pages/PaymentPage';
import InputCodePage from 'pages/InputCodePage';
import DataTablesPage from 'pages/DataTablesPage';
import ChartsPage from 'pages/ChartsPage';
import MapsPage from 'pages/MapsPage';
import MaintenancePage from 'pages/MaintenancePage';
import MainLayout from 'components/layouts/main/MainLayout/MainLayout';
import AuthLayout from 'components/layouts/auth/AuthLayout';

export const routes = [
  {
    layout: MainLayout,
    subRoutes: [
      {
        exact: true,
        path: '/',
        component: DashboardPage,
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
        component: DataTablesPage,
      },
      {
        path: '/charts',
        component: ChartsPage,
      },
      {
        path: '/maps',
        component: MapsPage,
      },
      {
        path: '/profile',
        component: ProfilePage,
      },
      {
        path: '/500',
        component: ServerErrorPage,
      },
      {
        path: '/maintenance',
        component: MaintenancePage,
      },
    ],
  },
  {
    layout: AuthLayout,
    subRoutes: [
      {
        path: '/login',
        component: LoginPage,
        exact: true,
      },
      {
        path: '/signup',
        component: SignUpPage,
        exact: true,
      },
      {
        path: '/lock',
        component: LockPage,
        exact: true,
      },
      {
        path: '/forgot-password',
        component: ForgotPasswordPage,
        exact: true,
      },
    ],
  },
  {
    layout: MainLayout,
    subRoutes: [
      {
        path: '*',
        component: Error404Page,
      },
    ],
  },
];
