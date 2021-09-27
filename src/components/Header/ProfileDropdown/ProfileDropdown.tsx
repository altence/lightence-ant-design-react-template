import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import { getUser, User } from '../../../api/users.api';
import * as S from '../Header.styles';
import { Link } from 'react-router-dom';

export const ProfileDropdown: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const isTablet = useMediaQuery({ query: theme.media.md });

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <Dropdown
      overlay={
        <S.Menu>
          <S.DropdownContent>
            <Link to="/profile">Go to profile</Link>
          </S.DropdownContent>
        </S.Menu>
      }
      trigger={['click']}
    >
      <S.ProfileDropdownHeader>
        {!user ? (
          <S.Spin />
        ) : (
          <>
            <S.ProfileAvatar src={user.imgUrl} shape="circle" />
            {isTablet && <S.Text>{`${user.firstName} ${user.lastName[0]}`}</S.Text>}
          </>
        )}

        <DownOutlined />
      </S.ProfileDropdownHeader>
    </Dropdown>
  );
};
