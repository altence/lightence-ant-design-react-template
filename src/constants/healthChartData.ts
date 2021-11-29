export interface Pie {
  value: number;
  name: string;
  description: string;
  color: string;
  dayUp: number;
}

export const pieChartData: Pie[] = [
  {
    value: 72,
    name: 'dashboard.health.lifestyle.title',
    description: 'dashboard.health.lifestyle.description',
    color: '#FF8B8B',
    dayUp: 13,
  },
  {
    value: 50,
    name: 'dashboard.health.ecology.title',
    description: 'dashboard.health.ecology.description',
    color: '#FFA115',
    dayUp: 15,
  },
  {
    value: 25,
    name: 'dashboard.health.genetics.title',
    description: 'dashboard.health.genetics.description',
    color: '#0059AB',
    dayUp: 11,
  },
  {
    value: 20,
    name: 'dashboard.health.someInfo.title',
    description: 'dashboard.health.someInfo.description',
    color: '#F5F5F5',
    dayUp: 20,
  },
];
