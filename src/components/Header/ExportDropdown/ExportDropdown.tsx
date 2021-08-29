import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../Header.styles';

export const ExportDropdown: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Dropdown overlay={<S.DropdownContent>Temp item</S.DropdownContent>} trigger={['click']}>
      <S.ExportDropdownHeader>
        <S.Text>{t('header.export')}</S.Text>
        <DownOutlined />
      </S.ExportDropdownHeader>
    </Dropdown>
  );
};
