import Dashboard from '../pages/Dashboard';
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
    exact: true,
    component: Login,
  },
];
