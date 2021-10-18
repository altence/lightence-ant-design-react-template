import React, { useCallback, useEffect } from 'react';
import { Col, FormInstance, notification, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from 'components/common/Form/Form';
import { CardNumberItem } from './CardNumberItem/CardNumberItem';
import { CardholderItem } from './CardholderItem/CardholderItem';
import { ExpDateItem } from './ExpDateItem/ExpDateItem';
import { CVVItem } from './CVVItem/CVVItem';
import { CardThemeItem } from './CardThemeItem/CardThemeItem';
import { CreditCard } from './interfaces';
import * as S from './PaymentForm.styles';
import { addCreditCard, updateCreditCard } from 'api/users.api';

interface PaymentFormProps {
  form: FormInstance;
  cardData: CreditCard;
  editCard: CreditCard | null;
  setCardData: (state: CreditCard) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
  closeModal: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  form,
  cardData,
  editCard,
  setCardData,
  setCards,
  closeModal,
}) => {
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

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData({ ...cardData, [event.target.name]: event.target.value });
    },
    [setCardData, cardData],
  );

  const onFinish = useCallback(
    async (values) => {
      const card = { ...values, background: cardData.background };

      let data: CreditCard;

      if (editCard) {
        data = await updateCreditCard(editCard);

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
    [setCards, cardData, editCard, closeModal],
  );

  useEffect(() => {
    if (editCard) {
      form.setFieldsValue(editCard);
      setCardData(editCard);
    }
  }, [editCard, setCardData]);

  return (
    <Form
      form={form}
      name="paymentCard"
      trigger={cardData}
      onFinish={onFinish}
      footer={(loading) => <S.PaymentButtons loading={loading} onCancel={closeModal} />}
    >
      <S.PayCard cardData={cardData} />
      <S.FormItemsWrapper>
        <CardNumberItem
          disabled={!!editCard}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
        />
        <CardholderItem
          disabled={!!editCard}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
        />
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
        <CardThemeItem cardData={cardData} setCardData={setCardData} />
      </S.FormItemsWrapper>
    </Form>
  );
};
