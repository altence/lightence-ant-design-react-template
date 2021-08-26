import React, { useEffect, useState } from 'react';
import { Dropdown, Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import { getUser, User } from '../../../api/users.api';
import * as S from '../Header.styles';

export const ProfileDropdown: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const isTablet = useMediaQuery({ query: theme.media.md });

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <Dropdown overlay={<S.DropdownContent>Temp item</S.DropdownContent>} trigger={['click']}>
      <S.ProfileDropdownHeader>
        {!user ? (
          <S.Spin />
        ) : (
          <>
            <S.ProfileAvatar src={user.imgUrl} shape="circle" />
            {isTablet && <S.Text>{user.name}</S.Text>}
          </>
        )}

        <DownOutlined />
      </S.ProfileDropdownHeader>
    </Dropdown>
  );
};
