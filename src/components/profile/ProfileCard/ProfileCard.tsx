import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { LeftOutlined } from '@ant-design/icons';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileNav } from './ProfileNav/ProfileNav';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { ProfileFormNav } from './ProfileFormNav/ProfileFormNav';
import { getUser, User } from 'api/users.api';
import theme from 'styles/theme';
import * as S from './ProfileCard.styles';

export const ProfileCard: React.FC = () => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  const [currentMenu, setCurrentMenu] = useState((isTablet && 'info') || 'main');
  const [profileData, setProfileData] = useState<User>();

  const { t } = useTranslation();

  useEffect(() => {
    getUser().then((res) => setProfileData(res));
  }, []);

  return profileData ? (
    <>
      <PageTitle>
        {isTablet || currentMenu === 'main' ? (
          t('profile.title')
        ) : (
          <S.Btn icon={<LeftOutlined />} type="text" onClick={() => setCurrentMenu('main')}>
            {t('common.back')}
          </S.Btn>
        )}
      </PageTitle>

      <Row gutter={[30, 30]}>
        {(isTablet || currentMenu === 'main') && (
          <Col xs={24} md={24} xl={8}>
            <S.CardProfile padding={30}>
              <Row gutter={[30, 30]}>
                <Col xs={24} md={12} xl={24}>
                  <ProfileInfo profileData={profileData} />
                </Col>

                <Col xs={24} md={12} xl={24}>
                  <ProfileNav menu={currentMenu} setCurrentMenu={setCurrentMenu} />
                </Col>
              </Row>
            </S.CardProfile>
          </Col>
        )}

        {(isTablet || currentMenu !== 'main') && (
          <Col md={24} xl={16}>
            <ProfileFormNav menu={currentMenu} />
          </Col>
        )}
      </Row>
    </>
  ) : null;
};
