export interface HealthFactor {
  value: number;
  title: string;
  description: string;
}

export const healthChartData: HealthFactor[] = [
  {
    value: 72,
    title: 'dashboard.health.lifestyle.title',
    description: 'dashboard.health.lifestyle.description',
  },
  {
    value: 50,
    title: 'dashboard.health.ecology.title',
    description: 'dashboard.health.ecology.description',
  },
  {
    value: 25,
    title: 'dashboard.health.genetics.title',
    description: 'dashboard.health.genetics.description',
  },
  {
    value: 20,
    title: 'dashboard.health.someInfo.title',
    description: 'dashboard.health.someInfo.description',
  },
];
