export interface Statistic {
  id: number;
  value: number;
  prevValue: number;
  unit: 'kg';
}

export const getStatistics = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 45,
          prevValue: 30,
          unit: 'kg',
        },
        {
          id: 2,
          value: 12,
          prevValue: 20,
          unit: 'kg',
        },
        {
          id: 3,
          value: 90,
          prevValue: 60,
          unit: 'kg',
        },
        {
          id: 4,
          value: 78,
          prevValue: 90,
          unit: 'kg',
        },
      ]);
    }, 0);
  });
};
