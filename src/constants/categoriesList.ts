export type CategoryType = 'apps' | 'forms' | 'charts' | 'auth' | 'data tables' | 'maps';

interface Category {
  name: CategoryType;
  title: string;
}

export const categoriesList: Category[] = [
  {
    name: 'apps',
    title: 'common.apps',
  },
  {
    name: 'auth',
    title: 'common.auth',
  },
  {
    name: 'forms',
    title: 'common.forms',
  },
  {
    name: 'data tables',
    title: 'common.dataTables',
  },
  {
    name: 'charts',
    title: 'common.charts',
  },
  {
    name: 'maps',
    title: 'common.maps',
  },
];
