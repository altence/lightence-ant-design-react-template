import React, { useMemo } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CategoryComponents } from 'components/Header/HeaderSearch/HeaderSearch';
import { camelize } from 'utils/utils';
import * as S from './SearchResults.styles';

interface SearchResultsProps {
  results: CategoryComponents[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const { t } = useTranslation();

  const resultsList = useMemo(
    () =>
      results.map((result) => (
        <List
          key={result.category}
          split={false}
          header={t(`common.${camelize(result.category)}`)}
          dataSource={result.components}
          renderItem={(item) => (
            <Link to={item.url}>
              <List.Item>
                <S.Text>{item.name}</S.Text>
              </List.Item>
            </Link>
          )}
        />
      )),
    [results],
  );

  return <S.SearchResultsWrapper>{resultsList}</S.SearchResultsWrapper>;
};
