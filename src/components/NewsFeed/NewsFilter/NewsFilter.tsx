import { Dropdown, Menu } from 'antd';
import React from 'react';
import { AppDate } from '../../../constants/Dates';

import * as S from './NewsFilter.styles';

interface NewsFilterProps {
  author: string;
  setAuthor: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  dates: [AppDate, AppDate] | [null, null];
  setDates: (values: [AppDate, AppDate] | [null, null]) => void;
}

export const NewsFilter: React.FC<NewsFilterProps> = ({ author, setAuthor, title, setTitle, dates, setDates }) => {
  const handleFilterAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleFilterTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDate = (dates: any) => {
    setDates([dates[0], dates[1]]);
  };

  const handleReset = () => {
    setAuthor('');
    setTitle('');
    setDates([null, null]);
  };

  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <Menu>
          <S.Dropdown>
            <S.Input placeholder="Search by author" value={author} onChange={handleFilterAuthor} />
            <S.Input placeholder="Search by title" value={title} onChange={handleFilterTitle} />
            <S.RangePicker dropdownClassName="range-picker" value={dates} onChange={handleDate} />
            <S.Btn onClick={handleReset}>Reset filter</S.Btn>
          </S.Dropdown>
        </Menu>
      }
    >
      <S.TitleHeader>
        <S.Title>Filter</S.Title>
      </S.TitleHeader>
    </Dropdown>
  );
};
