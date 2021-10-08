import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';
import { ThemeContext } from 'styled-components';
import { LinkBtn } from 'components/common/buttons/LinkBtn/LinkBtn';
import { getCurrencyPrice } from 'helpers/getCurrencyPrice';
import { paymentStatuses } from 'constants/paymentStatuses';
import { Dates } from 'constants/Dates';
import * as S from './Payment.styles';
import { Status } from '../Status/Status';

interface PaymentProps {
  src: string;
  recepient: string;
  date: number;
  status: number;
  price: number;
  currency: string;
}

export const Payment: React.FC<PaymentProps> = ({ src, recepient, date, status, price, currency }) => {
  const { t } = useTranslation();

  const themeContext = useContext(ThemeContext);

  const paymentStatus = useMemo(() => paymentStatuses.find((item) => item.id === status), [status]);

  return paymentStatus ? (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <Avatar src={src} alt={recepient} shape="circle" />
        </S.AvatarWrapper>
        <S.Text>{recepient}</S.Text>
      </S.Header>
      <S.ContentWrapper>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.date')}</S.Subtitle>
          <S.Text>{Dates.format(date, 'LL')}</S.Text>
        </S.Item>
        <S.Item>
          <S.Subtitle>{t('profile.nav.payments.status.title')}</S.Subtitle>
          <Status color={themeContext.colors.main[paymentStatus.color]} text={t(paymentStatus.name)} />
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
