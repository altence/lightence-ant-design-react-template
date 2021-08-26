import React from 'react';
import { Checkbox } from './Checkbox/Checkbox';
import * as S from './SearchFilter.styles';

const filter = ['apps', 'auth', 'forms', 'data tables', 'charts', 'maps'];

interface SearchFilterProps {
  category: string;
  setCategory: (func: (state: string) => string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ category, setCategory }) => {
  return (
    <S.FilterWrapper>
      <S.List>
        {filter.map((item, index) => (
          <S.ListItem key={index}>
            <Checkbox category={category} setCategory={setCategory} name={item} />
          </S.ListItem>
        ))}
      </S.List>
    </S.FilterWrapper>
  );
};
