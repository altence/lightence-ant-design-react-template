import React from 'react';

interface Friend {
  id: number;
  name: string;
  imgUrl: string;
  value: number;
  isDowngrade: boolean;
}

export const friends: Array<Friend> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 20,
    isDowngrade: false,
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 30,
    isDowngrade: true,
  },
  {
    id: 3,
    name: 'Ivanov Fedor',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 60,
    isDowngrade: false,
  },
  {
    id: 4,
    name: 'Ivanova Rita',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 31,
    isDowngrade: false,
  },
  {
    id: 5,
    name: 'Fedorov Nik',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 10,
    isDowngrade: true,
  },
  {
    id: 6,
    name: 'Ivanova Mia',
    imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    value: 23,
    isDowngrade: false,
  },
];
