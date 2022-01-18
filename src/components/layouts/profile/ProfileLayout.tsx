import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';
import { Button } from '@app/components/common/buttons/Button/Button';
import { ProfileInfo } from '@app/components/profile/ProfileCard/ProfileInfo/ProfileInfo';
import { ProfileNav } from '@app/components/profile/ProfileCard/ProfileNav/ProfileNav';
import { useResponsive } from '@app/hooks/useResponsive';
import { useAppSelector } from '@app/hooks/reduxHooks';

const ProfileLayout: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const { t } = useTranslation();
  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  const { isTablet } = useResponsive();

  const isTitleShown = isTabletOrHigher || (mobileOnly && location.pathname === '/profile');
  const isMenuShown = isTabletOrHigher || (mobileOnly && location.pathname !== '/profile');

  useEffect(() => {
    isTablet && location.pathname === '/profile' && navigate('personal-info');
  }, [isTablet, location.pathname, navigate]);

  return (
    <>
      {!isTitleShown && (
        <Btn icon={<LeftOutlined />} type="text" onClick={() => navigate('/profile')}>
          {t('common.back')}
        </Btn>
      )}

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
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
  color: ${(props) => props.theme.colors.main.secondary};
`;

export default ProfileLayout;
