import React, { useMemo, useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import useDebounce from '../../../hooks/useDebounce';
import { componentsData } from '../../../constants/componentsData';
import * as S from './SearchFilter.styles';

interface SearchFilterProps {
  value: string;
  isFilterActive: boolean;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ value, isFilterActive }) => {
  const [category, setCategory] = useState('');

  const debouncedValue = useDebounce(value, 1000);

  const results = useMemo(() => {
    const result = [];

    if (debouncedValue) {
      if (category) {
        for (let i = 0; i < componentsData.length; i++) {
          if (componentsData[i].category === category) {
            for (let j = 0; j < componentsData[i].keywords.length; j++) {
              if (componentsData[i].keywords[j].includes(debouncedValue)) {
                result.push(componentsData[i]);
              }
            }
          }
        }

        return result;
      } else {
        for (let i = 0; i < componentsData.length; i++) {
          for (let j = 0; j < componentsData[i].keywords.length; j++) {
            if (componentsData[i].keywords[j].includes(debouncedValue)) {
              result.push(componentsData[i]);
            }
          }
        }

        return result;
      }
    }
  }, [debouncedValue, category, componentsData]);

  const handleClickCategory = (mode: string) => () => {
    setCategory((prev) => {
      if (prev === mode) {
        return '';
      } else {
        return mode;
      }
    });
  };

  return (
    <S.Wrapper>
      <S.ResultsWrapper>
        {results ? (
          (results.length !== 0 &&
            results.map((item, index) => (
              <S.Link key={index} type="text" href={item.url}>
                {item.name}
              </S.Link>
            ))) || <S.Text>Try to change your search query</S.Text>
        ) : (
          <S.Text>Enter your search term</S.Text>
        )}
      </S.ResultsWrapper>

      {isFilterActive && (
        <S.FilterWrapper>
          <S.List>
            <S.ListItem onClick={handleClickCategory('apps')}>
              Apps
              {category === 'apps' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('auth')}>
              Auth
              {category === 'auth' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('forms')}>
              Forms
              {category === 'forms' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('data tables')}>
              Data tables
              {category === 'data tables' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('charts')}>
              Charts
              {category === 'charts' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('maps')}>
              Maps
              {category === 'maps' && <S.Check />}
            </S.ListItem>
            <S.ListItem onClick={handleClickCategory('pages')}>
              Pages
              {category === 'pages' && <S.Check />}
            </S.ListItem>
          </S.List>
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};
