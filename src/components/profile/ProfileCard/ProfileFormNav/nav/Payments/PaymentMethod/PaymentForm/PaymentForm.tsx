import React, { useCallback } from 'react';
import { Col, FormInstance, notification, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from 'components/common/Form/Form';
import { CardNumberItem } from './CardNumberItem/CardNumberItem';
import { CardholderItem } from './CardholderItem/CardholderItem';
import { ExpDateItem } from './ExpDateItem/ExpDateItem';
import { CVVItem } from './CVVItem/CVVItem';
import { CardThemeItem } from './CardThemeItem/CardThemeItem';
import { CreditCard } from './interfaces';
import { clearCardData } from '../PaymentMethod';
import * as S from './PaymentForm.styles';
import { addCreditCard, updateCreditCard } from 'api/users.api';

interface PaymentFormProps {
  form: FormInstance;
  cardData: CreditCard;
  setCardData: (state: CreditCard) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
  closeModal: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ form, cardData, setCardData, setCards, closeModal }) => {
  const { t } = useTranslation();

  const handleInputFocus = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData({
        ...cardData,
        focused: event.target.name,
      });
    },
    [setCardData, cardData],
  );

  const onFinish = useCallback(
    async (values) => {
      const card = { ...values, background: cardData.background };

      let data: CreditCard;

      if (cardData.isEdit) {
        data = await updateCreditCard(cardData);

        setCards((prev) => {
          const editCardIndex = prev.indexOf(data);
          const prevCopy = [...prev];

          prevCopy.splice(editCardIndex, 1, card);

          closeModal();

          return prevCopy;
        });
      } else {
        data = await addCreditCard(card);

        setCards((prev) => {
          if (prev.find((stateCard) => data.number === stateCard.number && data.name === stateCard.name)) {
            notification.open({ message: t('profile.nav.payments.sameCard') });

            return [...prev];
          }

          closeModal();

          return [...prev, card];
        });
      }
    },
    [setCards, cardData, closeModal],
  );

  return (
    <Form
      form={form}
      name="paymentCard"
      trigger={cardData}
      onFinish={onFinish}
      footer={(loading) => <S.PaymentButtons loading={loading} onCancel={closeModal} />}
      initialValues={clearCardData}
      onValuesChange={(field) => {
        const values = Object.entries(field)[0];

        setCardData({ ...cardData, [values[0]]: values[1] });
      }}
    >
      <S.PayCard cardData={cardData} />
      <S.FormItemsWrapper>
        <CardNumberItem disabled={!!cardData.isEdit} handleInputFocus={handleInputFocus} />
        <CardholderItem disabled={!!cardData.isEdit} handleInputFocus={handleInputFocus} />
        <Row gutter={[20, 0]}>
          <Col span={12}>
            <ExpDateItem disabled={!!cardData.isEdit} handleInputFocus={handleInputFocus} />
          </Col>
          <Col span={12}>
            <CVVItem disabled={!!cardData.isEdit} handleInputFocus={handleInputFocus} />
          </Col>
        </Row>
        <CardThemeItem cardData={cardData} setCardData={setCardData} />
      </S.FormItemsWrapper>
    </Form>
  );
};
