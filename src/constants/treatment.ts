interface Treatment {
  id: number;
  date: string;
  diagnosis: string;
  doctorName: string;
  doctorSpeciality: string;
  doctorRating: number;
  doctorImgUrl: string;
}

export const treatmentData: Treatment[] = [
  {
    id: 1,
    date: '06.08.21',
    diagnosis:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    doctorName: 'Ivanov Ivan',
    doctorSpeciality: 'Surgeon',
    doctorRating: 5,
    doctorImgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_1_d1omr2.jpg',
  },
  {
    id: 2,
    date: '09.08.21',
    diagnosis:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    doctorName: 'Fedorova Lida',
    doctorSpeciality: 'Dermatologist',
    doctorRating: 5,
    doctorImgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_2_hgqjsp.jpg',
  },
  {
    id: 3,
    date: '16.08.21',
    diagnosis:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    doctorName: 'Stepanov Fedor',
    doctorSpeciality: 'Oncologist',
    doctorRating: 5,
    doctorImgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436646/Rectangle_463_3_gl0gcr.jpg',
  },
  {
    id: 4,
    date: '19.08.21',
    diagnosis:
      'Without new treatments, the W.H.O. says, the number of new cancer patients could reach twenty-seven million.',
    doctorName: 'Filippov Anton',
    doctorSpeciality: 'Cardiologist',
    doctorRating: 4,
    doctorImgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_4_gep4lc.jpg',
  },
];
