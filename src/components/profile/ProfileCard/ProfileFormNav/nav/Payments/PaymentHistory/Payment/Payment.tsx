import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';
import { ThemeContext } from 'styled-components';
import { LinkBtn } from 'components/common/LinkBtn/LinkBtn';
import { getCurrencyPrice } from 'helpers/getCurrencyPrice';
import { paymentStatuses } from 'constants/paymentStatuses';
import { Dates } from 'constants/Dates';
import * as S from './Payment.styles';

interface PaymentProps {
  src: string;
  seller: string;
  date: number;
  status: number;
  price: number;
  currency: string;
}

export const Payment: React.FC<PaymentProps> = ({ src, seller, date, status, price, currency }) => {
  const { t } = useTranslation();

  const themeContext = useContext(ThemeContext);

  const paymentStatus = useMemo(() => paymentStatuses.find((item) => item.id === status), [status]);

  return paymentStatus ? (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <Avatar src={src} alt={seller} shape="circle" />
        </S.AvatarWrapper>
        <S.Text>{seller}</S.Text>
      </S.Header>
      <S.ContentWrapper>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.date')}</S.Subtitle>
          <S.Text>{Dates.format(date, 'LL')}</S.Text>
        </S.Item>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.status.title')}</S.Subtitle>
          <S.Status color={themeContext.colors.main[paymentStatus.color]}>{t(paymentStatus.name)}</S.Status>
        </S.Item>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.date')}</S.Subtitle>
          <S.Text>{getCurrencyPrice(price, currency)}</S.Text>
        </S.Item>
      </S.ContentWrapper>
      <S.DetailsWrapper>
        <LinkBtn>{t('profile.nav.payments.details')}</LinkBtn>
      </S.DetailsWrapper>
    </>
  ) : null;
};
