import React, { useState } from 'react';
import { Dropdown } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SearchOverlay } from './SearchOverlay/SearchOverlay';
import { useResponsive } from 'hooks/useResponsive';
import { DropdownHeader } from '../Header.styles';
import * as S from './SearchDropdown.styles';

export const SearchDropdown: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);

  const { t } = useTranslation();

  const { mobileOnly, isTablet } = useResponsive();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClickInput = (event: React.MouseEvent<HTMLInputElement>) => {
    isOverlayActive && event.stopPropagation();
  };

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    isOverlayActive && event.stopPropagation();

    setFilterActive(!isFilterActive);
  };

  return (
    <Dropdown
      onVisibleChange={(visible) => setOverlayActive(visible)}
      trigger={['click']}
      overlay={<SearchOverlay value={query} isFilterActive={isFilterActive} />}
    >
      <DropdownHeader>
        {mobileOnly && <S.SearchIcon />}

        {isTablet && (
          <S.SearchInput
            value={query}
            prefix={<S.SearchIcon />}
            placeholder={t('header.search')}
            onChange={handleChangeInput}
            onClick={handleClickInput}
            suffix={<ControlOutlined onClick={handleFilter} />}
          />
        )}
      </DropdownHeader>
    </Dropdown>
  );
};
