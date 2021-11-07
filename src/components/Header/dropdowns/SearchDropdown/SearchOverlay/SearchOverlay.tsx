import React from 'react';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { SearchResults } from './SearchResults/SearchResults';
import { CategoryComponents } from 'components/Header/HeaderSearch/HeaderSearch';
import { NotFound } from 'components/common/NotFound/NotFound';
import * as S from './SearchOverlay.styles';

interface SearchOverlayProps {
  data: CategoryComponents[] | null;
  isFilterActive: boolean;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ data, isFilterActive }) => {
  return (
    <S.Menu>
      <SearchFilter data={data} isFilterActive={isFilterActive}>
        {(filteredResults) => (filteredResults.length > 0 ? <SearchResults results={filteredResults} /> : <NotFound />)}
      </SearchFilter>
    </S.Menu>
  );
};
