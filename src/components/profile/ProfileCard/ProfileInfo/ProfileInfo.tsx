import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'src/api/users.api';
import * as S from './ProfileInfo.styles';

interface ProfileInfoProps {
  profileData: User;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileData }) => {
  const [fullness] = useState(90);

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.AvatarImg shape="circle" src={profileData.imgUrl} alt="Profile" />
      </S.ImgWrapper>

      <S.Title>{`${profileData.firstName} ${profileData.lastName}`}</S.Title>
      <S.Subtitle>{profileData.userName}</S.Subtitle>
      <S.FullnessWrapper>
        <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>
      </S.FullnessWrapper>
      <S.Text>{t('profile.fullness')}</S.Text>
    </S.Wrapper>
  );
};
