import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { LeftOutlined } from '@ant-design/icons';
import { Card } from '../../common/Card/Card';
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

      {!isTablet &&
        (currentMenu === 'main' ? (
          <Card padding={30}>
            <S.Wrapper>
              <ProfileInfo profileData={profileData} />
              <ProfileNav setCurrentMenu={setCurrentMenu} />
            </S.Wrapper>
          </Card>
        ) : (
          <ProfileFormNav menu={currentMenu} />
        ))}

      {isTablet && (
        <Row gutter={[20, 30]}>
          <Col md={24} xl={8}>
            <Card padding={30}>
              <S.Wrapper>
                <ProfileInfo profileData={profileData} />
                <ProfileNav setCurrentMenu={setCurrentMenu} />
              </S.Wrapper>
            </Card>
          </Col>

          <Col md={24} xl={16}>
            <ProfileFormNav menu={currentMenu} />
          </Col>
        </Row>
      )}
    </>
  ) : null;
};
