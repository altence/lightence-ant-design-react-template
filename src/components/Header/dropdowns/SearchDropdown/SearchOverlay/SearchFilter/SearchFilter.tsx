import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Col, Row } from 'antd';
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
        <Col xs={index === 1 || index === 4 ? 9 : 7} md={12} xxl={index === 1 || index === 4 ? 9 : 7} key={filter.name}>
          <S.CheckBox value={filter.name}>{t(filter.title)}</S.CheckBox>
        </Col>
      )),
    [],
  );

  useEffect(() => {
    if (selectedFilter.length > 0) {
      if (data) {
        const results = data.filter((component) => selectedFilter.some((filter) => filter === component.category));

        setFilteredResults(results.length > 0 ? results : []);
      } else {
        setFilteredResults([]);
      }
    } else {
      if (data) {
        setFilteredResults(data);
      } else {
        setFilteredResults(null);
      }
    }
  }, [data, selectedFilter]);

  return (
    <>
      <S.FilterWrapper isVisible={isVisible}>
        <Row justify="center">
          <Checkbox.Group onChange={(checkedValues) => setSelectedFilter(checkedValues as CategoryType[])}>
            <Row gutter={[5, 5]}>{filterElements}</Row>
          </Checkbox.Group>
        </Row>
      </S.FilterWrapper>

      {filteredResults && children(filteredResults)}
    </>
  );
};
