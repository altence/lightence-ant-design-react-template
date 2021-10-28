import React, { useState } from 'react';
import { Button, Dropdown, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SearchOverlay } from './SearchOverlay/SearchOverlay';
import filterIcon from '../../../assets/icons/filter.svg';
import { useResponsive } from 'hooks/useResponsive';
import { DropdownHeader, DropdownMenu } from '../Header.styles';

const filter = <img src={filterIcon} alt="Toggle filter" />;

export const SearchDropdown: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [isFilterActive, setFilterActive] = useState(false);

  const { t } = useTranslation();

  const { isTablet } = useResponsive();

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
    <Dropdown trigger={['click']} overlay={<SearchOverlay value="1" isFilterActive={false} />}>
      <DropdownHeader>
        <SearchOutlined />
      </DropdownHeader>
    </Dropdown>
  );
};

// <Dropdown
//   onVisibleChange={(visible) => setOverlayActive(visible)}
//   overlay={
//     <S.Menu>
//       <S.DropdownContent>
//         <SearchOverlay value={query} isFilterActive={isFilterActive} />
//       </S.DropdownContent>
//     </S.Menu>
//   }
//   trigger={['click']}
// >
//   <S.SearchDropdownHeader>
//     <SearchOutlined />
//     {isTablet && (
//       <>
//         <Input
//           size="small"
//           bordered={false}
//           placeholder={t('header.search')}
//           value={query}
//           onChange={handleChangeInput}
//           onClick={handleClickInput}
//         />
//         <Button size="small" type="text" icon={filter} onClick={handleFilter} />
//       </>
//     )}
//   </S.SearchDropdownHeader>
// </Dropdown>
