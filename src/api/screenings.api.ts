export interface Screening {
  name: string;
  imgUrl: string;
  value: number;
  prevValue: number;
  // Data should come from api in real project
}

export const getScreenings = (): Promise<Screening[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          name: 'Ivanov Ivan',
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/happy-young-male-doctor-using-tablet-computer_zjnbab.jpg',
          value: 45,
          prevValue: 30,
        },
        {
          name: 'Fedorova Lida',
          value: 12,
          prevValue: 20,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/doctor-using-tablet-computer-isolated-white-wall_jmtkgi.jpg',
        },
        {
          name: 'Ivanov Fedor',
          value: 90,
          prevValue: 60,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/portrait-successful-mid-adult-doctor-with-crossed-arms_kp1eyf.jpg',
        },
        {
          name: 'Ivanova Rita',
          value: 78,
          prevValue: 90,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/studio-shot-attractive-middle-aged-blonde-woman-physician-with-stethoscope-around-her-neck-posing-isolated-with-pen-clipboard-making-medical-records-prescribing-treatment-patient_l8ygoh.jpg',
        },
        {
          name: 'Fedorov Nik',
          value: 78,
          prevValue: 0,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/smile-happiness-nurse-medical-arab-strong_kqz3iv.jpg',
        },
        {
          name: 'Ivanova Mia',
          value: 78,
          prevValue: 90,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
        },
      ]);
    }, 0);
  });
};
