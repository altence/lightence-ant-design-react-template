import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Dropdown, Button, Input } from 'antd';
import { BellOutlined, DownOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { SearchFilter } from './SearchFilter/SearchFilter';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import filterIcon from '../../assets/icons/filter.svg';
import theme from '../../styles/theme';
import { userData } from '../../constants/userData';
import * as S from './Header.styles';

interface HeaderProps {
  toggleSider?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const [value, setValue] = useState('');
  const [isFilterActive, setFilterActive] = useState(false);
  const [isOverlayActive, setOverlayActive] = useState(false);

  console.log(isOverlayActive);

  const isTablet = useMediaQuery({ query: theme.media.md });

  const menu = <S.DropdownContent>Temp item</S.DropdownContent>;

  const hamburger = <img src={hamburgerIcon} alt="Toggle Sider" />;
  const filter = <img src={filterIcon} alt="Toggle filter" />;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClickInput = (event: React.MouseEvent<HTMLInputElement>) => {
    isOverlayActive && event.stopPropagation();
  };

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    isOverlayActive && event.stopPropagation();

    setFilterActive(!isFilterActive);
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        {!isTablet && (
          <S.MenuWrapper>
            <Button size="small" type="text" icon={hamburger} onClick={toggleSider} />
          </S.MenuWrapper>
        )}

        <Dropdown
          onVisibleChange={(visible) => setOverlayActive(visible)}
          overlay={
            <S.DropdownContent>
              <SearchFilter value={value} isFilterActive={isFilterActive} />
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
                  value={value}
                  onChange={handleChangeInput}
                  onClick={handleClickInput}
                />
                <Button size="small" type="text" icon={filter} onClick={handleFilter} />
              </>
            )}
          </S.SearchDropdownHeader>
        </Dropdown>

        <S.ButtonsWrapper>
          <Dropdown overlay={menu} trigger={['click']}>
            <S.ProfileDropdownHeader>
              <S.ProfileAvatar src={userData.imgUrl} shape="circle" />
              {isTablet && <S.Text>{userData.name}</S.Text>}
              <DownOutlined />
            </S.ProfileDropdownHeader>
          </Dropdown>
          <Dropdown overlay={menu} trigger={['click']}>
            <S.DropdownHeader>
              <S.Badge color="red">
                <BellOutlined />
              </S.Badge>
            </S.DropdownHeader>
          </Dropdown>
          <Dropdown overlay={menu} trigger={['click']}>
            <S.DropdownHeader>
              <SettingOutlined />
            </S.DropdownHeader>
          </Dropdown>
        </S.ButtonsWrapper>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.Title>Dashboard</S.Title>

        <Dropdown overlay={menu} trigger={['click']}>
          <S.ExportDropdownHeader>
            <S.Text>Export</S.Text>
            <DownOutlined />
          </S.ExportDropdownHeader>
        </Dropdown>
      </S.BottomWrapper>
    </S.Wrapper>
  );
};
