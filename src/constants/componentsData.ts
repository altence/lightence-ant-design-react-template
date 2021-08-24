interface Component {
  id: number;
  name: string;
  url: string;
  category: string;
  keywords: string[];
}

export const componentsData: Component[] = [
  {
    id: 1,
    name: 'protein statistics card',
    url: '/#protein',
    category: 'charts',
    keywords: ['protein', 'charts', 'statistics'],
  },
  {
    id: 2,
    name: 'fat statistics card',
    url: '/#fat',
    category: 'charts',
    keywords: ['fat', 'charts', 'statistics'],
  },
  {
    id: 3,
    name: 'bones statistics card',
    url: '/#bones',
    category: 'charts',
    keywords: ['bones', 'charts', 'statistics'],
  },
  {
    id: 4,
    name: 'water balance statistics card',
    url: '/#water-balance',
    category: 'charts',
    keywords: ['water', 'balance', 'statistics', 'charts'],
  },
  {
    id: 5,
    name: 'map card',
    url: '/#map',
    category: 'maps',
    keywords: ['maps', 'doctor', 'polyclinic'],
  },
  {
    id: 6,
    name: 'latest screenings card',
    url: '/#latest-screenings',
    category: 'charts',
    keywords: ['latest screenings', 'charts', 'statistics'],
  },
  {
    id: 7,
    name: 'blood screening card',
    url: '/#blood-screening',
    category: 'data tables',
    keywords: ['blood screening', 'statistics', 'data tables'],
  },
  {
    id: 8,
    name: 'treatment plan card',
    url: '/#treatment',
    category: 'data tables',
    keywords: ['treatment plan', 'data tables'],
  },
  {
    id: 9,
    name: 'activity chart card',
    url: '/#activity',
    category: 'charts',
    keywords: ['activity', 'charts', 'statistics'],
  },
  {
    id: 10,
    name: 'covid chart statistics card',
    url: '/#covid',
    category: 'charts',
    keywords: ['covid', 'charts', 'statistics'],
  },
  {
    id: 11,
    name: 'favorite doctors card',
    url: '/#fav-doctors',
    category: 'data tables',
    keywords: ['favorite doctors', 'data tables'],
  },
  {
    id: 12,
    name: 'patient timeline card',
    url: '/#timeline',
    category: 'data tables',
    keywords: ['patient timeline', 'data tables'],
  },
  {
    id: 13,
    name: 'pieces of advice card',
    url: '/#advice',
    category: 'data tables',
    keywords: ['pieces of advice', 'data tables'],
  },
];
