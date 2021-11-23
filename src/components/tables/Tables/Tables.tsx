import React from 'react';
import { BasicTable } from '../BasicTable/BasicTable';
import { TreeTable } from '../TreeTable/TreeTable';
import { EditableTable } from '../EditableTable/EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';

export const Tables: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.Title>{t('tables.tables')}</S.Title>
      <S.TablesWrapper>
        <BasicTable />
        <TreeTable />
        <EditableTable />
      </S.TablesWrapper>
    </>
  );
};
