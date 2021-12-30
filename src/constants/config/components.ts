import { CategoryType } from '../categoriesList';

export interface Component {
  name: string;
  url: string;
  categories: CategoryType[];
  keywords: string[];
}

// TODO review and come up with a better approach for urls
export const components: Component[] = [
  {
    name: 'Protein',
    url: `/#protein`,
    categories: ['charts'],
    keywords: ['protein', 'charts', 'statistics'],
  },
  {
    name: 'Fat',
    url: `/#fat`,
    categories: ['charts'],
    keywords: ['fat', 'charts', 'statistics'],
  },
  {
    name: 'Bones',
    url: `/#bones`,
    categories: ['charts'],
    keywords: ['bones', 'charts', 'statistics'],
  },
  {
    name: 'Water',
    url: `/#water`,
    categories: ['charts'],
    keywords: ['water', 'statistics', 'charts'],
  },
  {
    name: 'Map',
    url: `/#map`,
    categories: ['maps'],
    keywords: ['maps', 'doctor', 'polyclinic'],
  },
  {
    name: 'Blood screening',
    url: `/#blood-screening`,
    categories: ['data tables', 'charts'],
    keywords: ['blood screening', 'statistics', 'data tables', 'charts'],
  },
  {
    name: 'Latest screenings',
    url: `/#latest-screenings`,
    categories: ['charts'],
    keywords: ['latest screenings', 'charts', 'statistics'],
  },
  {
    name: 'Treatment plan',
    url: `/#treatment-plan`,
    categories: ['data tables'],
    keywords: ['treatment plan', 'data tables', 'doctor'],
  },
  {
    name: 'Activity',
    url: `/#activity`,
    categories: ['charts'],
    keywords: ['activity', 'charts', 'statistics'],
  },
  {
    name: 'Covid',
    url: `/#covid`,
    categories: ['charts'],
    keywords: ['covid', 'charts', 'statistics'],
  },
  {
    name: 'Patient timeline',
    url: `/#patient-timeline`,
    categories: ['data tables'],
    keywords: ['patient timeline', 'data tables'],
  },
  {
    name: 'Health',
    url: `/#health`,
    categories: ['charts'],
    keywords: ['health', 'charts'],
  },
  {
    name: 'Favorite doctors',
    url: `/#favorite-doctors`,
    categories: ['data tables'],
    keywords: ['favorite doctors', 'data tables'],
  },
  {
    name: 'News',
    url: `/#news`,
    categories: ['data tables'],
    keywords: ['news', 'data tables'],
  },
  {
    name: 'Feed',
    url: `/apps/feed`,
    categories: ['apps'],
    keywords: ['feed', 'apps'],
  },
  {
    name: 'Kanban',
    url: `/apps/kanban`,
    categories: ['apps'],
    keywords: ['kanban', 'apps', 'trello'],
  },
  {
    name: 'Log in',
    url: `/auth/login`,
    categories: ['auth'],
    keywords: ['auth', 'log in', 'login'],
  },
  {
    name: 'Sign up',
    url: `/auth/sign-up`,
    categories: ['auth'],
    keywords: ['auth', 'sign up', 'signup'],
  },
  {
    name: 'Lock',
    url: `/auth/lock`,
    categories: ['auth'],
    keywords: ['auth', 'lock'],
  },
  {
    name: 'Forgot password',
    url: `/auth/forgot-password`,
    categories: ['auth'],
    keywords: ['auth', 'forgot password'],
  },
  {
    name: 'Security code',
    url: `/auth/security-code`,
    categories: ['auth'],
    keywords: ['auth', 'security code'],
  },
  {
    name: 'New password',
    url: `/auth/new-password`,
    categories: ['auth'],
    keywords: ['auth', 'new password'],
  },
  {
    name: 'Dynamic form',
    url: `/forms/advanced-forms/#dynamic-form`,
    categories: ['forms'],
    keywords: ['dynamic form', 'forms'],
  },
  {
    name: 'Control form',
    url: `/forms/advanced-forms/#control-form`,
    categories: ['forms'],
    keywords: ['control form', 'forms'],
  },
  {
    name: 'Validation form',
    url: `/forms/advanced-forms/#validation-form`,
    categories: ['forms'],
    keywords: ['validation form', 'forms'],
  },
  {
    name: 'Step form',
    url: `/forms/advanced-forms/#step-form`,
    categories: ['forms'],
    keywords: ['step form', 'forms'],
  },
  {
    name: 'Basic table',
    url: `/data-tables/#basic-table`,
    categories: ['data tables'],
    keywords: ['basic table', 'data tables'],
  },
  {
    name: 'Tree table',
    url: `/data-tables/#tree-table`,
    categories: ['data tables'],
    keywords: ['tree table', 'data tables'],
  },
  {
    name: 'Editable table',
    url: `/data-tables/#editable-table`,
    categories: ['data tables'],
    keywords: ['editable table', 'data tables'],
  },
  {
    name: 'Gradient stacked area',
    url: `/charts/#gradient-stacked-area`,
    categories: ['charts'],
    keywords: ['gradient stacked area', 'charts'],
  },
  {
    name: 'Bar animation delay',
    url: `/charts/#bar-animation-delay`,
    categories: ['charts'],
    keywords: ['gradient stacked area', 'charts'],
  },
  {
    name: 'Pie',
    url: `/charts/#pie`,
    categories: ['charts'],
    keywords: ['pie', 'charts'],
  },
  {
    name: 'Scatter',
    url: `/charts/#scatter`,
    categories: ['charts'],
    keywords: ['scatter', 'charts'],
  },
  {
    name: 'Line race',
    url: `/charts/#line-race`,
    categories: ['charts'],
    keywords: ['line race', 'charts'],
  },
  {
    name: 'Server error',
    url: `/server-error`,
    categories: ['data tables'],
    keywords: ['server error', 'data tables', '500'],
  },
  {
    name: 'Client error',
    url: `/404`,
    categories: ['data tables'],
    keywords: ['client error', 'data tables', '400'],
  },
];
