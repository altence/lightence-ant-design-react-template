import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { Button } from '@app/components/common/buttons/Button/Button';
import { ProfileInfo } from '@app/components/profile/ProfileCard/ProfileInfo/ProfileInfo';
import { ProfileNav } from '@app/components/profile/ProfileCard/ProfileNav/ProfileNav';
import { useResponsive } from '@app/hooks/useResponsive';
import { getUser, User } from '@app/api/users.api';

const ProfileLayout: React.FC = () => {
  const [user, setUser] = useState<User>();

  const { isDesktop } = useResponsive();

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  const { t } = useTranslation();
  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  const isTitleShown = isTabletOrHigher || (mobileOnly && location.pathname === '/profile');
  const isMenuShown = isTabletOrHigher || (mobileOnly && location.pathname !== '/profile');

  useEffect(() => {
    isDesktop && location.pathname === '/profile' && navigate('personal-info');
  }, [isDesktop, location.pathname, navigate]);

  return (
    <>
      <PageTitle>
        {isTitleShown ? (
          t('profile.title')
        ) : (
          <Btn icon={<LeftOutlined />} type="text" onClick={() => navigate('/profile')}>
            {t('common.back')}
          </Btn>
        )}
      </PageTitle>

      <Row gutter={[30, 30]}>
        {isTitleShown && (
          <Col xs={24} md={24} xl={8}>
            <ProfileCard>
              <Row gutter={[30, 30]}>
                <Col xs={24} md={12} xl={24}>
                  <ProfileInfo profileData={user} />
                </Col>

                <Col xs={24} md={12} xl={24}>
                  <ProfileNav />
                </Col>
              </Row>
            </ProfileCard>
          </Col>
        )}

        {isMenuShown && (
          <Col xs={24} md={24} xl={16}>
            <Outlet />
          </Col>
        )}
      </Row>
    </>
  );
};

const ProfileCard = styled(Card)`
  height: unset;
`;

const Btn = styled(Button)`
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
`;

export default ProfileLayout;
