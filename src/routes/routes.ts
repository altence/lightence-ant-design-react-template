import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Error500 from '../pages/Error500';
import Feed from '../pages/Feed';
import Login from '../pages/Login';

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
    path: '/feed',
    guarded: false,
    exact: false,
    component: Feed,
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
