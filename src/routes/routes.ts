import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Error500 from '../pages/Error500';
import NewsFeedPage from '../pages/NewsFeedPage';
import ForgotPassword from '../pages/ForgotPassword';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

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
    path: '',
    guarded: false,
    exact: false,
    component: Error404,
  },
];
