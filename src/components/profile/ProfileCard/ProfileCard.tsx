import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LeftOutlined } from '@ant-design/icons';
import { Card } from '../../common/Card/Card';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileNav } from './ProfileNav/ProfileNav';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { ProfileFormNav } from './ProfileFormNav/ProfileFormNav';
import { getUser, User } from 'api/users.api';
import * as S from './ProfileCard.styles';

export const ProfileCard: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState('main');

  const [profileData, setProfileData] = useState<User>();

  const { t } = useTranslation();

  useEffect(() => {
    getUser().then((res) => setProfileData(res));
  }, []);

  return profileData ? (
    <>
      <PageTitle>
        {currentMenu === 'main' ? (
          t('profile.title')
        ) : (
          <S.Btn icon={<LeftOutlined />} type="text" onClick={() => setCurrentMenu('main')}>
            {t('common.back')}
          </S.Btn>
        )}
      </PageTitle>

      {currentMenu === 'main' ? (
        <Card padding={30}>
          <ProfileInfo profileData={profileData} />
          <ProfileNav setCurrentMenu={setCurrentMenu} />
        </Card>
      ) : (
        <ProfileFormNav menu={currentMenu} />
      )}
    </>
  ) : null;
};
