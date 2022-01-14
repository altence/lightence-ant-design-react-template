import React from 'react';
import { Avatar, Col, Dropdown, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { H6 } from 'components/common/typography/H6/H6';
import { ProfileOverlay } from './ProfileOverlay/ProfileOverlay';
import theme from 'styles/theme';
import * as S from './ProfileDropdown.styles';
import { useAppSelector } from '@app/hooks/reduxHooks';

export const ProfileDropdown: React.FC = () => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <Avatar src={user.imgUrl} alt="User" shape="circle" size={36} />
        </Col>
        {isTablet && (
          <Col>
            <H6>{`${user.firstName} ${user.lastName[0]}`}</H6>
          </Col>
        )}
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
