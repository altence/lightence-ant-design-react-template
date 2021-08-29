interface Result {
  id: number;
  status: number;
  date: number;
  isActive: boolean;
}

export const patientResultsData: Array<Result> = [
  {
    id: 1,
    status: 1,
    date: 1627765200000,
    isActive: true,
  },
  {
    id: 2,
    status: 2,
    date: 1627851600000,
    isActive: false,
  },
  {
    id: 3,
    status: 3,
    date: 1628110800000,
    isActive: false,
  },
];
