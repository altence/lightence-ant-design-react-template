import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, notification, Row } from 'antd';
import { CardNumberItem } from './CardNumberItem/CardNumberItem';
import { CardholderItem } from './CardholderItem/CardholderItem';
import { ExpDateItem } from './ExpDateItem/ExpDateItem';
import { CVVItem } from './CVVItem/CVVItem';
import { ButtonsGroup } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ButtonsGroup/ButtonsGroup';
import { CardThemeItem } from './CardThemeItem/CardThemeItem';
import { emptyCardState } from '../PaymentCardModal';
import { CreditCard } from '../../PaymentCard/PaymentCard';
import { cardThemes } from 'constants/cardThemes';
import * as S from './PaymentCardForm.styles';

interface PaymwentCardFormProps {
  editCard: CreditCard | null;
  setEditCard: (state: null) => void;
  setModalVisible: (state: boolean) => void;
  currentTheme: string;
  setCurrentTheme: (state: string) => void;
  cardData: CreditCard;
  setCardData: (func: (state: CreditCard) => CreditCard) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
}

export const PaymentCardForm: React.FC<PaymwentCardFormProps> = ({
  editCard,
  setEditCard,
  setModalVisible,
  currentTheme,
  setCurrentTheme,
  cardData,
  setCardData,
  setCards,
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [form] = S.PaymentForm.useForm();

  const { t } = useTranslation();

  const handleInputFocus = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData((prev) => {
        return {
          ...prev,
          focused:
            (event.target.name === 'name' && 'name') ||
            (event.target.name === 'cvc' && 'cvc') ||
            (event.target.name === 'expiry' && 'expiry') ||
            (event.target.name === 'number' && 'number') ||
            'name',
        };
      });
    },
    [setCardData],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    },
    [setCardData],
  );

  const onCancel = useCallback(() => {
    editCard && setEditCard(null);

    setModalVisible(false);
  }, [setModalVisible, editCard, setEditCard]);

  const onFinish = useCallback(
    (values: any) => {
      const data = { ...values, focused: '', theme: currentTheme };

      setCards((prev) => {
        if (editCard) {
          const editCardIndex = prev.indexOf(editCard);
          const prevCopy = [...prev];

          prevCopy.splice(editCardIndex, 1, data);

          setEditCard(null);
          setModalVisible(false);

          return prevCopy;
        } else if (prev.find((card) => card.number === data.number && card.name === data.name)) {
          notification.open({ message: t('profile.nav.payments.sameCard') });

          return [...prev];
        } else {
          setModalVisible(false);

          return [...prev, data];
        }
      });

      form.setFieldsValue(emptyCardState);

      setCardData(() => emptyCardState);
    },
    [editCard, setEditCard, setModalVisible, currentTheme],
  );

  const onFieldsChange = useCallback(() => {
    setFieldsChange(true);
  }, [setFieldsChange]);

  useEffect(() => {
    if (editCard) {
      form.setFieldsValue(editCard);

      setCurrentTheme(editCard.theme || cardThemes[0].background);
      setCardData(() => editCard);
    }
  }, [editCard, setCurrentTheme, setCardData, cardThemes]);

  return (
    <S.PaymentForm
      form={form}
      initialValues={cardData}
      name="paymentCards"
      layout="vertical"
      onFinish={onFinish}
      onFieldsChange={onFieldsChange}
    >
      <CardNumberItem disabled={!!editCard} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} />
      <CardholderItem disabled={!!editCard} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} />
      <Row gutter={[20, 0]}>
        <Col span={12}>
          <ExpDateItem
            disabled={!!editCard}
            handleInputChange={handleInputChange}
            handleInputFocus={handleInputFocus}
          />
        </Col>
        <Col span={12}>
          <CVVItem disabled={!!editCard} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} />
        </Col>
      </Row>
      <CardThemeItem currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} setFieldsChange={setFieldsChange} />
      {isFieldsChange && <ButtonsGroup onCancel={onCancel} />}
    </S.PaymentForm>
  );
};
