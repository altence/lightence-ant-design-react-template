import avatar1 from 'assets/avatars/avatar1.png';
import avatar2 from 'assets/avatars/avatar2.png';
import { Post } from '../api/news.api';
import { newsTags } from './newsTags';

const { health } = newsTags;

export const piecesOfAdviceData: Array<Post> = [
  {
    title: 'Curbing COVID-19 through border controls and restricted entry',
    text: 'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: Date.now(),
    img: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628873611/Rectangle_440_2_yussyc.jpg',
    avatarUrl: avatar1,
    author: 'Dr. Dan Reed',
    tags: [health],
  },
  {
    title: 'Curbing COVID-19 through border controls and restricted entry',
    text: 'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: Date.now(),
    img: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628873607/Rectangle_742_azba4d.jpg',
    avatarUrl: avatar2,
    author: 'Jordan Howard',
    tags: [health],
  },
];
