import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Form as AntForm } from 'antd';
import { ProfileForm } from '../../ProfileForm/ProfileForm';
import { Card } from 'components/common/Card/Card';
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
import * as S from '../../../../../common/Form/Form.styles';
import { Dates } from '@app/constants/Dates';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface PersonalInfoForm {
  birthday?: string;
  lastName: string;
  country?: string;
  website: string;
  city?: string;
  address2: string;
  nickName: string;
  address1: string;
  sex?: string;
  facebook: string;
  language?: string;
  linkedin: string;
  zipcode: string;
  firstName: string;
  twitter: string;
  phone: string;
  email: string;
}

const initialPersonalInfoValues = {
  firstName: '',
  lastName: '',
  nickName: '',
  sex: undefined,
  birthday: undefined,
  language: undefined,
  phone: '',
  email: '',
  country: undefined,
  city: undefined,
  address1: '',
  address2: '',
  zipcode: '',
  website: '',
  twitter: '',
  linkedin: '',
  facebook: '',
};

export const PersonalInfo: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const [website, setWebsite] = useState(user?.website);
  const [twitter, setTwitter] = useState(user?.socials?.twitter);
  const [linkedin, setLinkedin] = useState(user?.socials?.linkedin);
  const [facebook, setFacebook] = useState(user?.socials?.facebook);

  const userFormValues = useMemo(
    () =>
      user
        ? {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email.name,
            phone: user.phone.number,
            nickname: user.userName,
            sex: user.sex,
            birthday: Dates.getDate(user.birthday),
            language: user.lang,
            country: user.country,
            city: user.city,
            address1: user.address1,
            address2: user?.address2,
            zipcode: user.zipcode,
            website: user?.website,
            twitter: user?.socials?.twitter,
            linkedin: user?.socials?.linkedin,
            facebook: user?.socials?.facebook,
          }
        : initialPersonalInfoValues,
    [user],
  );

  const [form] = AntForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => {
    // todo dispatch an action here
    console.log(values);
  }, []);

  const onCancel = () => {
    form.resetFields();

    setWebsite(userFormValues.website);
    setTwitter(userFormValues.twitter);
    setLinkedin(userFormValues.linkedin);
    setFacebook(userFormValues.facebook);
  };

  const onChange = (values: PersonalInfoForm) => {
    const { website, twitter, linkedin, facebook } = values;

    website && setWebsite(website);
    twitter && setTwitter(twitter);
    linkedin && setLinkedin(linkedin);
    facebook && setFacebook(facebook);
  };

  return (
    <Card>
      <ProfileForm
        form={form}
        name="info"
        onValuesChange={onChange}
        onCancel={onCancel}
        onFinish={onFinish}
        initialValues={userFormValues}
      >
        <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.title')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <FirstNameItem />
          </Col>

          <Col xs={24} md={12}>
            <LastNameItem />
          </Col>

          <Col xs={24} md={12}>
            <NicknameItem />
          </Col>

          <Col xs={24} md={12}>
            <SexItem />
          </Col>

          <Col xs={24} md={12}>
            <BirthdayItem />
          </Col>

          <Col xs={24} md={12}>
            <LanguageItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.contactInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <PhoneItem verified={user?.phone.verified} />
          </Col>

          <Col xs={24} md={12}>
            <EmailItem verified={user?.email.verified} />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('common.address')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <CountriesItem />
          </Col>

          <Col xs={24} md={12}>
            <CitiesItem />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={1} />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={2} />
          </Col>

          <Col xs={24} md={12}>
            <ZipcodeItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.otherInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <WebsiteItem website={website} />
          </Col>

          <Col span={24}>
            <SocialLinksItem
              socialLinks={{
                twitter,
                linkedin,
                facebook,
              }}
            />
          </Col>
        </Row>
      </ProfileForm>
    </Card>
  );
};
