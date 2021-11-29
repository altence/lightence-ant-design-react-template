import { pieChartData, Pie } from 'constants/healthChartData';

export const getHealthChartData = (): Promise<Pie[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(pieChartData);
    }, 1000);
  });
};
