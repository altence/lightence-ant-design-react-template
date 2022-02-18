export interface HealthFactor {
  value: number;
  name: string;
  description: string;
}

export const healthChartData: HealthFactor[] = [
  {
    value: 50,
    name: 'dashboard.health.lifestyle.title',
    description: 'medical-dashboard.health.lifestyle.description',
  },
  {
    value: 20,
    name: 'dashboard.health.ecology.title',
    description: 'medical-dashboard.health.ecology.description',
  },
  {
    value: 20,
    name: 'dashboard.health.genetics.title',
    description: 'medical-dashboard.health.genetics.description',
  },
  {
    value: 10,
    name: 'dashboard.health.medicine.title',
    description: 'medical-dashboard.health.medicine.description',
  },
];
