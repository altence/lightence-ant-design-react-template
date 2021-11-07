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
    name: 'forms',
    title: 'common.forms',
  },
  {
    name: 'charts',
    title: 'common.charts',
  },
  {
    name: 'auth',
    title: 'common.auth',
  },
  {
    name: 'data tables',
    title: 'common.dataTables',
  },
  {
    name: 'maps',
    title: 'common.maps',
  },
];
