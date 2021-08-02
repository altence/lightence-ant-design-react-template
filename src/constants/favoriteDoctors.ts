import { Dates } from './dates';

const today = Dates.getToday();

export interface FavoriteDoctor {
  id?: number;
  name: string;
  specifity: string;
  visit: Date;
  rating: number;
  imgUrl: string;
}

export const favoriteDoctors: Array<FavoriteDoctor> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 2,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 3,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 4,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 5,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 6,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 7,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 8,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 9,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
];
