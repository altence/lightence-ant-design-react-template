import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SearchDropdown } from '../dropdowns/searchDropdown/SearchDropdown';
import { useResponsive } from 'hooks/useResponsive';
import { components as configComponents, Component } from '@app/constants/config/components';
import { categoriesList, CategoryType } from 'constants/categoriesList';
import * as S from './HeaderSearch.styles';

export interface CategoryComponents {
  category: CategoryType;
  components: Component[];
}

export const HeaderSearch: React.FC = () => {
  const { mobileOnly, isTablet } = useResponsive();

  const { pathname } = useLocation();

  const [query, setQuery] = useState('');
  const [components] = useState<Component[]>(configComponents);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const sortedResults = query
    ? categoriesList.reduce((acc, current) => {
        const searchResults = components.filter(
          (component) =>
            component.categories.includes(current.name) &&
            component.keywords.some((keyword) => keyword.includes(query)),
        );

        return searchResults.length > 0 ? acc.concat({ category: current.name, components: searchResults }) : acc;
      }, [] as CategoryComponents[])
    : null;

  useEffect(() => {
    setModalVisible(false);
    setOverlayVisible(false);
  }, [pathname]);

  return (
    <>
      {mobileOnly && (
        <>
          <S.SearchIcon onClick={() => setModalVisible(true)} />
          <S.SearchModal
            visible={isModalVisible}
            closable={false}
            footer={null}
            onCancel={() => setModalVisible(false)}
            destroyOnClose
          >
            <SearchDropdown
              query={query}
              setQuery={setQuery}
              data={sortedResults}
              isOverlayVisible={isOverlayVisible}
              setOverlayVisible={setOverlayVisible}
            />
          </S.SearchModal>
        </>
      )}

      {isTablet && (
        <SearchDropdown
          query={query}
          setQuery={setQuery}
          data={sortedResults}
          isOverlayVisible={isOverlayVisible}
          setOverlayVisible={setOverlayVisible}
        />
      )}
    </>
  );
};
