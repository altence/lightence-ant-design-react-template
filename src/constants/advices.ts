import { Dates } from './dates';

const today = Dates.getToday();

export interface Advice {
  id?: number;
  title: string;
  description: string;
  date: Date;
  imgUrl: string;
}

export const advices: Array<Advice> = [
  {
    id: 1,
    title: 'Curbing COVID-19 through border controls and restricted entry',
    description:
      'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: today,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1627943218/Rectangle_440_x23jwl.jpg',
  },
  {
    id: 2,
    title: 'Curbing COVID-19 through border controls and restricted entry',
    description:
      'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: today,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1627943218/Rectangle_440_x23jwl.jpg',
  },
];
