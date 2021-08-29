export interface Advice {
  id?: number;
  title: string;
  description: string;
  date: number;
  imgUrl: string;
  imgUrlHighResol?: string;
}

export const piecesOfAdviceData: Array<Advice> = [
  {
    id: 1,
    title: 'dashboard.piecesOfAdvice.lab.title',
    description: 'dashboard.piecesOfAdvice.lab.description',
    date: 1628370000000,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628873611/Rectangle_440_2_yussyc.jpg',
    imgUrlHighResol: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628445403/Rectangle_440_1_ayb6yf.jpg',
  },
  {
    id: 2,
    title: 'dashboard.piecesOfAdvice.doc.title',
    description: 'dashboard.piecesOfAdvice.doc.description',
    date: 1628370000000,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628873607/Rectangle_742_azba4d.jpg',
    imgUrlHighResol: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628445409/Rectangle_441_1_iq4y2p.jpg',
  },
];
