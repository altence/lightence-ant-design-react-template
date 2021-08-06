interface Treatment {
  id: number;
  doctorName: string;
  doctorSpeciality: string;
  doctorRating: number;
  doctorImgUrl: string;
  diagnosis: string;
  visit: string | Date;
}

export const treatmentData: Treatment[] = [
  {
    id: 1,
    doctorName: 'Lina Ivanova',
    doctorSpeciality: 'Surgeon',
    doctorRating: 5,
    doctorImgUrl: '',
    diagnosis:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    visit: '30.08.21',
  },
];
