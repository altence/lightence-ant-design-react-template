export interface PatientTimeline {
  id?: number;
  title: string;
  description: string;
  date: number;
  isActive: boolean;
}

export const patientTimeline: Array<PatientTimeline> = [
  {
    id: 1,
    title: 'Patient Discharge',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: 1627765200000,
    isActive: true,
  },
  {
    id: 2,
    title: 'Treatment Starts',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: 1627851600000,
    isActive: false,
  },
  {
    id: 3,
    title: 'Patient admission',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: 1628110800000,
    isActive: false,
  },
];
