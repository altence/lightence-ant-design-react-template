import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { CardTheme, cardThemes } from '@app/constants/cardThemes';
import { PaymentCard } from '@app/interfaces/interfaces';
import * as S from './CardThemeItem.styles';

interface CardThemeItemProps {
  cardData: PaymentCard;
  setCardData: (state: PaymentCard) => void;
}

export const CardThemeItem: React.FC<CardThemeItemProps> = ({ cardData, setCardData }) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    (item: CardTheme) => () => {
      setCardData({ ...cardData, background: item.background });
    },
    [setCardData, cardData],
  );

  const themes = useMemo(
    () =>
      cardThemes.map((item) => (
        <Col xs={8} md={4} key={item.id}>
          <S.BackgroundWrapper background={item.background} isActive={cardData.background === item.background}>
            <S.Theme tabIndex={0} onClick={handleChange(item)} />
          </S.BackgroundWrapper>
        </Col>
      )),
    [cardData, handleChange],
  );

  return (
    <BaseButtonsForm.Item label={t('profile.nav.payments.cardTheme')}>
      <Row gutter={[10, 10]}>{themes}</Row>
    </BaseButtonsForm.Item>
  );
};
