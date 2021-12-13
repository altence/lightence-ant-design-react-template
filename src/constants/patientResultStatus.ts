interface ResultStatus {
  id: number;
  name: string;
  desc: string;
}

export const patientResultStatus: ResultStatus[] = [
  {
    id: 1,
    name: 'dashboard.patientResults.patientAdmission.title',
    desc: 'dashboard.patientResults.patientAdmission.description',
  },
  {
    id: 2,
    name: 'dashboard.patientResults.treatmentStarts.title',
    desc: 'dashboard.patientResults.treatmentStarts.description',
  },
  {
    id: 3,
    name: 'dashboard.patientResults.patientDischarge.title',
    desc: 'dashboard.patientResults.patientDischarge.description',
  },
];
