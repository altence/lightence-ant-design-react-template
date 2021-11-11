import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'antd';
import { categoriesList, CategoryType } from 'constants/categoriesList';
import { CategoryComponents } from 'components/Header/HeaderSearch/HeaderSearch';
import * as S from './SearchFilter.styles';

interface SearchFilterProps {
  data: CategoryComponents[] | null;
  isVisible: boolean;
  children: (filteredResults: CategoryComponents[]) => React.ReactNode;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ data, isVisible, children }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryType[]>([]);
  const [filteredResults, setFilteredResults] = useState<CategoryComponents[] | null>(data);

  const { t } = useTranslation();

  const filterElements = useMemo(
    () =>
      categoriesList.map((filter, index) => (
        <S.CheckBox key={index} value={filter.name}>
          {t(filter.title)}
        </S.CheckBox>
      )),
    [],
  );

  useEffect(() => {
    if (data) {
      if (selectedFilter.length > 0) {
        setFilteredResults(data.filter((component) => selectedFilter.some((filter) => filter === component.category)));
      } else {
        setFilteredResults(data);
      }
    } else {
      setFilteredResults(null);
    }
  }, [data, selectedFilter]);

  return (
    <>
      <S.FilterWrapper isVisible={isVisible}>
        <Checkbox.Group onChange={(checkedValues) => setSelectedFilter(checkedValues as CategoryType[])}>
          <S.CategoriesWrapper>{filterElements}</S.CategoriesWrapper>
        </Checkbox.Group>
      </S.FilterWrapper>

      {filteredResults && children(filteredResults)}
    </>
  );
};
