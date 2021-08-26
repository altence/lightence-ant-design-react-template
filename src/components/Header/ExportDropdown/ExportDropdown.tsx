import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import * as S from '../Header.styles';

export const ExportDropdown: React.FC = () => {
  return (
    <Dropdown overlay={<S.DropdownContent>Temp item</S.DropdownContent>} trigger={['click']}>
      <S.ExportDropdownHeader>
        <S.Text>Export</S.Text>
        <DownOutlined />
      </S.ExportDropdownHeader>
    </Dropdown>
  );
};
