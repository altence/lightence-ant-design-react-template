import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row, Form as AntForm } from 'antd';
import { Card } from 'components/common/Card/Card';
import { useMediaQuery } from 'react-responsive';
import { Form } from '../../../../../common/Form/Form';
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
import { updateUser } from 'api/users.api';
import theme from 'styles/theme';
import * as S from '../../../../../common/Form/Form.styles';

export const PersonalInfo: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: undefined,
    lastName: undefined,
    nickName: undefined,
    sex: undefined,
    birthday: undefined,
    language: undefined,
    phone: undefined,
    email: undefined,
    country: 'Belarus',
    city: undefined,
    address1: undefined,
    address2: undefined,
    zipcode: undefined,
    website: undefined,
    twitter: undefined,
    linkedin: undefined,
    facebook: undefined,
  });

  const [form] = AntForm.useForm();

  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => {
    const data = await updateUser(values);

    return data;
  }, []);

  return (
    <Card padding={isDesktop ? [60, 54] : (isTablet && [40, 30]) || [30, 16]}>
      <Form
        form={form}
        name="info"
        initialValues={formValues}
        onValuesChange={(_, allFields) => setFormValues(allFields)}
        onFinish={onFinish}
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
            <PhoneItem />
          </Col>

          <Col xs={24} md={12}>
            <EmailItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.address')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <CountriesItem />
          </Col>

          <Col xs={24} md={12}>
            <CitiesItem country={formValues.country} />
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
            <WebsiteItem website={formValues.website} />
          </Col>

          <Col span={24}>
            <SocialLinksItem
              socialLinks={{
                twitter: formValues.twitter,
                linkedin: formValues.linkedin,
                facebook: formValues.facebook,
              }}
            />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
