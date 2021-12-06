export interface HealthFactor {
  value: number;
  title: string;
  description: string;
}

export const healthChartData: HealthFactor[] = [
  {
    value: 50,
    title: 'dashboard.health.lifestyle.title',
    description: 'dashboard.health.lifestyle.description',
  },
  {
    value: 20,
    title: 'dashboard.health.ecology.title',
    description: 'dashboard.health.ecology.description',
  },
  {
    value: 20,
    title: 'dashboard.health.genetics.title',
    description: 'dashboard.health.genetics.description',
  },
  {
    value: 10,
    title: 'dashboard.health.medicine.title',
    description: 'dashboard.health.medicine.description',
  },
];
