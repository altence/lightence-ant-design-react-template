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
import { RoutesEnum } from 'constants/navigation';

export const routes = [
  {
    layout: MainLayout,
    subRoutes: [
      {
        exact: true,
        path: RoutesEnum.DASHBOARD_PAGE,
        component: DashboardPage,
      },
      {
        path: RoutesEnum.FEED_PAGE,
        component: NewsFeedPage,
      },
      {
        path: RoutesEnum.KANBAN_PAGE,
        component: KanbanPage,
      },
      {
        path: RoutesEnum.PAYMENT_PAGE,
        component: PaymentPage,
      },
      {
        path: RoutesEnum.INPUT_CODE_PAGE,
        component: InputCodePage,
      },
      {
        path: RoutesEnum.DATA_TABLES_PAGE,
        component: DataTablesPage,
      },
      {
        path: RoutesEnum.CHARTS_PAGE,
        component: ChartsPage,
      },
      {
        path: RoutesEnum.MAPS_PAGE,
        component: MapsPage,
      },
      {
        path: RoutesEnum.PROFILE_PAGE,
        component: ProfilePage,
      },
      {
        path: RoutesEnum.SERVER_ERROR_PAGE,
        component: ServerErrorPage,
      },
      {
        path: RoutesEnum.MAINTENANCE_PAGE,
        component: MaintenancePage,
      },
    ],
  },
  {
    layout: AuthLayout,
    subRoutes: [
      {
        path: RoutesEnum.LOGIN_PAGE,
        component: LoginPage,
        exact: true,
      },
      {
        path: RoutesEnum.SIGNUP_PAGE,
        component: SignUpPage,
        exact: true,
      },
      {
        path: RoutesEnum.LOCK_PAGE,
        component: LockPage,
        exact: true,
      },
      {
        path: RoutesEnum.FORGOT_PASSWORD_PAGE,
        component: ForgotPasswordPage,
        exact: true,
      },
    ],
  },
  {
    layout: MainLayout,
    subRoutes: [
      {
        path: RoutesEnum.ERROR404_PAGE,
        component: Error404Page,
      },
    ],
  },
];
