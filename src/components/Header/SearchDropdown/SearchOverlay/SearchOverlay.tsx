import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../../../hooks/useDebounce';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { Component, componentsData } from '../../../../constants/componentsData';
import * as S from './SearchOverlay.styles';

interface SearchOverlayProps {
  value: string;
  isFilterActive: boolean;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ value, isFilterActive }) => {
  const [category, setCategory] = useState('');

  const { t } = useTranslation();

  const debouncedValue = useDebounce(value, 1000);

  const results = useMemo(() => {
    const result: Component[] = [];

    if (debouncedValue) {
      if (category) {
        componentsData.forEach((component) => {
          if (component.category === category) {
            component.keywords.forEach((keyword) => {
              if (keyword.includes(debouncedValue)) {
                result.push(component);
              }
            });
          }
        });

        return result;
      } else {
        componentsData.forEach((component) => {
          component.keywords.forEach((keyword) => {
            if (keyword.includes(debouncedValue)) {
              result.push(component);
            }
          });
        });

        return result;
      }
    }
  }, [debouncedValue, category, componentsData]);

  return (
    <S.Wrapper>
      <S.ResultsWrapper>
        {results ? (
          (results.length !== 0 &&
            results.map((item, index) => (
              <S.Link key={index} type="text" href={item.url}>
                {item.name}
              </S.Link>
            ))) || <S.Text>{t('header.notFound')} </S.Text>
        ) : (
          <S.Text>{t('header.searchTerm')}</S.Text>
        )}
      </S.ResultsWrapper>

      {isFilterActive && <SearchFilter category={category} setCategory={setCategory} />}
    </S.Wrapper>
  );
};
