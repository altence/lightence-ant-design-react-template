import { Post } from '../api/news.api';
import { newsTags } from './newsTags';

const avatar1 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar1.webp';
const avatar2 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar2.webp';

const { health, covid } = newsTags;

export const dashboardNews: Array<Post> = [
  {
    title: 'Curbing COVID-19',
    text: 'Case finding via measures such as border controls, restricted entry, and inbound traveler quarantine, combined with testing high-risk populations and contacts of diagnosed COVID-19 patients. Timely and repeated testing may be necessary to minimize false-negative results. Trace digital tools can aid in outbreak investigation, contact tracing, and monitoring compliance with self-isolation.',
    date: Date.now(),
    img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_440_1_ayb6yf.webp',
    avatarUrl: avatar1,
    author: 'Dr. Dan Reed',
    tags: [health, covid],
  },
  {
    title: 'Cancer therapies',
    text: 'Non-small cell lung cancer (NSCLC) is a leading cause of cancer-related death both around the world and in the United States. Like many cancers, NSCLC is not one disease but a heterogeneous activity-card of multiple cancer subtypes. The most common subtype of NSCLC is adenocarcinoma, which is also the subtype of NSCLC that we modeled in our study.',
    date: Date.now(),
    img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_441_1_iq4y2p.webp',
    avatarUrl: avatar2,
    author: 'Jordan Howard',
    tags: [health],
  },
];
