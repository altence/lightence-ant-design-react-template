import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FirstNameItem } from './FirstNameItem/FirstNameItem';
import { LastNameItem } from './LastNameItem/LastNameItem';
import { NicknameItem } from './NicknameItem/NicknameItem';
import { SexItem } from './SexItem/SexItem';
import { BirthdayItem } from './BirthdayItem/BirthdayItem';
import { LanguageItem } from './LanguageItem/LanguageItem';
import { PhoneItem } from './PhoneItem/PhoneItem';
import { EmailItem } from './EmailItem/EmailItem';
import { CountriesItem } from './CountriesItem/CountriesItem';
import { CitiesItem } from './CitiesItem/CitiesItem';
import { ZipcodeItem } from './ZipcodeItem/ZipcodeItem';
import { AddressItem } from './AddressItem/AddressItem';
import { WebsiteItem } from './WebsiteItem/WebsiteItem';
import { SocialLinksItem } from './SocialLinksItem/SocialLinksItem';
import * as S from '../ProfileForm.styles';

export const PersonalInfo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('BY');

  const { t } = useTranslation();

  return (
    <>
      <S.Title>{t('profile.nav.personalInfo.title')}</S.Title>
      <FirstNameItem />
      <LastNameItem />
      <NicknameItem />
      <SexItem />
      <BirthdayItem />
      <LanguageItem />
      <S.Title>{t('profile.nav.personalInfo.contactInfo')}</S.Title>
      <PhoneItem />
      <EmailItem />
      <S.Title>{t('profile.nav.personalInfo.address')}</S.Title>
      <CountriesItem country={selectedCountry} setCountry={setSelectedCountry} />
      <CitiesItem country={selectedCountry} />
      <ZipcodeItem />
      <AddressItem number={1} />
      <AddressItem number={2} />
      <S.Title>{t('profile.nav.personalInfo.address')}</S.Title>
      <WebsiteItem />
      <SocialLinksItem />
    </>
  );
};
