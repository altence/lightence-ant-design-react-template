import React from 'react';
import { Checkbox } from './Checkbox/Checkbox';
import { filterData } from 'constants/filterData';
import * as S from './SearchFilter.styles';

interface SearchFilterProps {
  category: string;
  setCategory: (func: (state: string) => string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ category, setCategory }) => {
  return (
    <S.FilterWrapper>
      <S.List>
        {filterData.map((item) => (
          <S.ListItem key={item.id}>
            <Checkbox category={category} setCategory={setCategory} name={item.name} />
          </S.ListItem>
        ))}
      </S.List>
    </S.FilterWrapper>
  );
};
