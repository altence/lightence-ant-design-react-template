export interface PatientTimeline {
  id?: number;
  title: string;
  description: string;
  date: string | Date;
  isActive: boolean;
}

export const patientTimeline: Array<PatientTimeline> = [
  {
    id: 1,
    title: 'Patient Discharge',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: '1 August 2021',
    isActive: true,
  },
  {
    id: 2,
    title: 'Treatment Starts',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: '2 August 2021',
    isActive: false,
  },
  {
    id: 3,
    title: 'Patient admission',
    description:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    date: '5 August 2021',
    isActive: false,
  },
];
