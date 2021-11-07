import { CategoryType } from './categoriesList';
import { RoutesEnum } from './navigation';

export interface Component {
  name: string;
  url: string;
  categories: CategoryType[];
  keywords: string[];
}

export const componentsData: Component[] = [
  {
    name: 'Protein',
    url: `${RoutesEnum.DASHBOARD_PAGE}#protein`,
    categories: ['charts'],
    keywords: ['protein', 'charts', 'statistics'],
  },
  {
    name: 'Fat',
    url: `${RoutesEnum.DASHBOARD_PAGE}#fat`,
    categories: ['charts'],
    keywords: ['fat', 'charts', 'statistics'],
  },
  {
    name: 'Bones',
    url: `${RoutesEnum.DASHBOARD_PAGE}#bones`,
    categories: ['charts'],
    keywords: ['bones', 'charts', 'statistics'],
  },
  {
    name: 'Water balance',
    url: `${RoutesEnum.DASHBOARD_PAGE}#water-balance`,
    categories: ['charts'],
    keywords: ['water', 'balance', 'statistics', 'charts'],
  },
  {
    name: 'Map',
    url: `${RoutesEnum.DASHBOARD_PAGE}#map`,
    categories: ['maps'],
    keywords: ['maps', 'doctor', 'polyclinic'],
  },
  {
    name: 'Latest screenings',
    url: `${RoutesEnum.DASHBOARD_PAGE}#latest-screenings`,
    categories: ['charts'],
    keywords: ['latest screenings', 'charts', 'statistics'],
  },
  {
    name: 'Blood screening',
    url: `${RoutesEnum.DASHBOARD_PAGE}#blood-screening`,
    categories: ['data tables'],
    keywords: ['blood screening', 'statistics', 'data tables'],
  },
  {
    name: 'Treatment plan',
    url: `${RoutesEnum.DASHBOARD_PAGE}#treatment`,
    categories: ['data tables'],
    keywords: ['treatment plan', 'data tables'],
  },
  {
    name: 'Activity chart',
    url: `${RoutesEnum.DASHBOARD_PAGE}#activity`,
    categories: ['charts'],
    keywords: ['activity', 'charts', 'statistics'],
  },
  {
    name: 'Covid chart',
    url: `${RoutesEnum.DASHBOARD_PAGE}#covid`,
    categories: ['charts'],
    keywords: ['covid', 'charts', 'statistics'],
  },
  {
    name: 'Favorite doctors',
    url: `${RoutesEnum.DASHBOARD_PAGE}#fav-doctors`,
    categories: ['data tables'],
    keywords: ['favorite doctors', 'data tables'],
  },
  {
    name: 'Patient timeline',
    url: `${RoutesEnum.DASHBOARD_PAGE}#timeline`,
    categories: ['data tables'],
    keywords: ['patient timeline', 'data tables'],
  },
  {
    name: 'Pieces of advice',
    url: `${RoutesEnum.DASHBOARD_PAGE}#advice`,
    categories: ['data tables'],
    keywords: ['pieces of advice', 'data tables'],
  },
];
