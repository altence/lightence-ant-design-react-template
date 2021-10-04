import React, { useState } from 'react';
import { HeadCheckbox } from './HeadCheckbox/HeadCheckbox';
import { Checkbox } from './Checkbox/Checkbox';
import { Table } from 'components/common/Table/Table';

export const NotificationsTypes: React.FC = () => {
  const [isCheck1, setIsCheck1] = useState<any>([]);
  const [isCheck2, setIsCheck2] = useState<any>([]);
  const [isCheck3, setIsCheck3] = useState<any>([]);

  const data = [
    {
      email: {
        name: 'Test1',
        id: 1,
      },
      sms: {
        name: 'Test2',
        id: 2,
      },
      push: {
        name: 'Test3',
        id: 3,
      },
      activities: {
        name: 'Test4',
        id: 4,
      },
    },
    {
      email: {
        name: 'Test5',
        id: 5,
      },
      sms: {
        name: 'Test6',
        id: 6,
      },
      push: {
        name: 'Test7',
        id: 7,
      },
      activities: {
        name: 'Test8',
        id: 8,
      },
    },
    {
      email: {
        name: 'Test9',
        id: 9,
      },
      sms: {
        name: 'Test10',
        id: 10,
      },
      push: {
        name: 'Test11',
        id: 11,
      },
      activities: {
        name: 'Test12',
        id: 12,
      },
    },
  ];

  const columns = [
    {
      id: 13,
      name: 'Email',
      field: 'email',
      renderHead: (text: string, list: any, field: string) => (
        <HeadCheckbox name={text} setIsCheck={setIsCheck1} list={list} field={field} />
      ),
      renderItems: (text: string, id: number, list: any) => (
        <Checkbox name={text} list={list} id={id} isCheck={isCheck1} setIsCheck={setIsCheck1} />
      ),
    },
    {
      id: 14,
      name: 'SMS',
      field: 'sms',
      renderHead: (text: string, list: any, field: string) => (
        <HeadCheckbox name={text} setIsCheck={setIsCheck3} list={list} field={field} />
      ),
      renderItems: (text: string, id: number, list: any) => (
        <Checkbox name={text} list={list} id={id} isCheck={isCheck3} setIsCheck={setIsCheck3} />
      ),
    },
    {
      id: 15,
      name: 'Push',
      field: 'push',
      renderHead: (text: string, list: any, field: string) => (
        <HeadCheckbox name={text} setIsCheck={setIsCheck2} list={list} field={field} />
      ),
      renderItems: (text: string, id: number, list: any) => (
        <Checkbox name={text} list={list} id={id} isCheck={isCheck2} setIsCheck={setIsCheck2} />
      ),
    },
    { id: 16, name: 'Activities', field: 'activities' },
  ];

  return <Table data={data} columns={columns} />;
};
