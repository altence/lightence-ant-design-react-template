import React from 'react';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { SearchResults } from '../SearchResults/SearchResults';
import { CategoryComponents } from '@app/components/header/components/HeaderSearch/HeaderSearch';
import { NotFound } from '@app/components/common/NotFound/NotFound';
import * as S from './SearchOverlay.styles';

interface SearchOverlayProps {
  data: CategoryComponents[] | null;
  isFilterVisible: boolean;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ data, isFilterVisible }) => {
  return (
    <S.Menu>
      <SearchFilter data={data} isVisible={isFilterVisible}>
        {(filteredResults) => (filteredResults.length > 0 ? <SearchResults results={filteredResults} /> : <NotFound />)}
      </SearchFilter>
    </S.Menu>
  );
};
