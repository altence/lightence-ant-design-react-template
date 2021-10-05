import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';
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
          <S.Subtite>{t('profile.nav.payments.date')}</S.Subtite>
          <S.Text>{Dates.format(date, 'LL')}</S.Text>
        </S.Item>
        <S.Item>
          <S.Subtite>{t('profile.nav.payments.status.title')}</S.Subtite>
          <S.Status color={paymentStatus.color}>{t(paymentStatus.name)}</S.Status>
        </S.Item>
        <S.Item>
          <S.Subtite>{t('profile.nav.payments.date')}</S.Subtite>
          <S.Text>{getCurrencyPrice(price, currency)}</S.Text>
        </S.Item>
      </S.ContentWrapper>
      <S.DetailsWrapper>
        <LinkBtn>{t('profile.nav.payments.details')}</LinkBtn>
      </S.DetailsWrapper>
    </>
  ) : null;
};
