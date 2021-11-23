import React from 'react';
import { BasicTable } from '../BasicTable/BasicTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const Tables: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.Title>{t('tables.tables')}</S.Title>
      <S.TablesWrapper>
        <BasicTable />
      </S.TablesWrapper>
    </>
  );
};
