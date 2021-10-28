import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';
import { ThemeContext } from 'styled-components';
import { getCurrencyPrice } from 'helpers/getCurrencyPrice';
import { paymentStatuses } from 'constants/paymentStatuses';
import { Dates } from 'constants/Dates';
import { Status } from '../Status/Status';
import * as S from './Payment.styles';
import { Button } from 'components/common/buttons/Button/Button';

interface PaymentProps {
  src: string;
  recipient: string;
  date: number;
  status: number;
  price: number;
  currency: string;
}

export const Payment: React.FC<PaymentProps> = ({ src, recipient, date, status, price, currency }) => {
  const { t } = useTranslation();

  const themeContext = useContext(ThemeContext);

  const paymentStatus = useMemo(() => paymentStatuses.find((item) => item.id === status), [status]);

  return paymentStatus ? (
    <>
      <S.Header>
        <S.AvatarWrapper>
          <Avatar src={src} alt={recipient} shape="circle" />
        </S.AvatarWrapper>
        <S.Text>{recipient}</S.Text>
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
        <Button type="link">{t('profile.nav.payments.details')}</Button>
      </S.DetailsWrapper>
    </>
  ) : null;
};
