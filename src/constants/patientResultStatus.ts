interface ResultStatus {
  id: number;
  name: string;
  desc: string;
}

export const patientResultStatus: ResultStatus[] = [
  {
    id: 1,
    name: 'medical-dashboard.patientResults.patientAdmission.title',
    desc: 'medical-dashboard.patientResults.patientAdmission.description',
  },
  {
    id: 2,
    name: 'medical-dashboard.patientResults.treatmentStarts.title',
    desc: 'medical-dashboard.patientResults.treatmentStarts.description',
  },
  {
    id: 3,
    name: 'medical-dashboard.patientResults.patientDischarge.title',
    desc: 'medical-dashboard.patientResults.patientDischarge.description',
  },
];
