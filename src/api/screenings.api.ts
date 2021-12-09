export interface Screening {
  id: number;
  value: number;
  prevValue: number;
}

export const getScreenings = (): Promise<Screening[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 45,
          prevValue: 30,
        },
        {
          id: 2,
          value: 12,
          prevValue: 20,
        },
        {
          id: 3,
          value: 90,
          prevValue: 60,
        },
        {
          id: 4,
          value: 78,
          prevValue: 90,
        },
        {
          id: 5,
          value: 78,
          prevValue: 0,
        },
        {
          id: 6,
          value: 78,
          prevValue: 90,
        },
      ]);
    }, 0);
  });
};
