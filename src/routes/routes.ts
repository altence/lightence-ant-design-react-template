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

export const routes = [
  {
    path: '/',
    guarded: true,
    exact: true,
    component: Dashboard,
  },
  {
    path: '/login',
    guarded: false,
    exact: false,
    component: Login,
  },
  {
    path: '/signup',
    guarded: false,
    exact: false,
    component: SignUp,
  },
  {
    path: '/lock',
    guarded: false,
    exact: false,
    component: Lock,
  },
  {
    path: '/forgot-password',
    guarded: false,
    exact: false,
    component: ForgotPassword,
  },
  {
    path: '/feed',
    guarded: false,
    exact: false,
    component: NewsFeedPage,
  },
  {
    path: '/kanban',
    guarded: false,
    exact: false,
    component: KanbanPage,
  },
  {
    path: '/payment',
    guarded: false,
    exact: false,
    component: PaymentPage,
  },
  {
    path: '/input-code',
    guarded: false,
    exact: false,
    component: InputCodePage,
  },
  {
    path: '/data-tables',
    guarded: false,
    exact: false,
    component: DataTables,
  },
  {
    path: '/charts',
    guarded: false,
    exact: false,
    component: Charts,
  },
  {
    path: '/maps',
    guarded: false,
    exact: false,
    component: Maps,
  },
  {
    path: '/profile',
    guarded: false,
    exact: false,
    component: Profile,
  },
  {
    path: '/500',
    guarded: false,
    exact: false,
    component: Error500,
  },
  {
    path: '/maintenance',
    guarded: false,
    exact: false,
    component: Maintenance,
  },
  {
    path: '',
    guarded: false,
    exact: false,
    component: Error404,
  },
];
