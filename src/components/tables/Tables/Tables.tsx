import React from 'react';
import { BasicTable } from '../BasicTable/BasicTable';
import { TreeTable } from '../TreeTable/TreeTable';
import { EditableTable } from '../EditableTable/EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';
import { Card } from 'components/common/Card/Card';

export const Tables: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.Title>{t('tables.tables')}</S.Title>
      <S.TablesWrapper>
        <Card title="Basic Table" padding="0 1.25rem">
          <BasicTable />
        </Card>
        <Card title="Tree Table" padding="0 1.25rem">
          <TreeTable />
        </Card>
        <Card title="Editable Table" padding="0 1.25rem">
          <EditableTable />
        </Card>
      </S.TablesWrapper>
    </>
  );
};
