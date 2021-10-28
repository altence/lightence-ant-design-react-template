import React, { useEffect, useState } from 'react';
import { Col, Dropdown, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { H6 } from 'components/common/typography/H6/H6';
import { ProfileOverlay } from './ProfileOverlay/ProfileOverlay';
import { getUser, User } from '../../../api/users.api';
import theme from '../../../styles/theme';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const isTablet = useMediaQuery({ query: theme.media.md });

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, []);

  return user ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <S.AvatarImg src={user.imgUrl} alt="User" shape="circle" />
        </Col>
        {isTablet && (
          <Col>
            <H6>{`${user.firstName} ${user.lastName[0]}`}</H6>
          </Col>
        )}
        <Col>
          <S.DownArrow />
        </Col>
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
