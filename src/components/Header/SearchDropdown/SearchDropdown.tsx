import React, { useState } from 'react';
import { Button, Dropdown, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { SearchOverlay } from './SearchOverlay/SearchOverlay';
import filterIcon from '../../../assets/icons/filter.svg';
import theme from '../../../styles/theme';
import * as S from '../Header.styles';

const filter = <img src={filterIcon} alt="Toggle filter" />;

export const SearchDropdown: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);

  const isTablet = useMediaQuery({ query: theme.media.md });

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
      overlay={
        <S.DropdownContent>
          <SearchOverlay value={query} isFilterActive={isFilterActive} />
        </S.DropdownContent>
      }
      trigger={['click']}
    >
      <S.SearchDropdownHeader>
        <SearchOutlined />
        {isTablet && (
          <>
            <Input
              size="small"
              bordered={false}
              placeholder="Search"
              value={query}
              onChange={handleChangeInput}
              onClick={handleClickInput}
            />
            <Button size="small" type="text" icon={filter} onClick={handleFilter} />
          </>
        )}
      </S.SearchDropdownHeader>
    </Dropdown>
  );
};
