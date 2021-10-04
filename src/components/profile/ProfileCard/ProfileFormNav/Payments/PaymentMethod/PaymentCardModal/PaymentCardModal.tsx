import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Row, Col, notification } from 'antd';
import * as S from './PaymentCardModal.styles';
import { CardNumberItem } from './CardNumberItem/CardNumberItem';
import { CardholderItem } from './CardholderItem/CardholderItem';
import { ExpDateItem } from './ExpDateItem/ExpDateItem';
import { CVVItem } from './CVVItem/CVVItem';
import { ButtonsGroup } from 'components/profile/ProfileCard/ProfileForm/ButtonsGroup/ButtonsGroup';
import { CardThemeItem } from './CardThemeItem/CardThemeItem';
import { cardThemes } from 'constants/cardThemes';
import { CreditCard } from '../PaymentCard/PaymentCard';
import { useTranslation } from 'react-i18next';

const emptyCardState = {
  cvc: '',
  expiry: '',
  name: '',
  number: '',
  focused: '',
};

export interface CardData {
  disabled: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PaymentCardModalProps {
  editCard: CreditCard | null;
  setEditCard: (state: null) => void;
  isModalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
}

export const PaymentCardModal: React.FC<PaymentCardModalProps> = ({
  editCard,
  setEditCard,
  isModalVisible,
  setModalVisible,
  setCards,
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(cardThemes[0].background);
  const [cardData, setCardData] = useState<CreditCard>(emptyCardState);

  const [form] = S.PaymentForm.useForm();

  const { t } = useTranslation();

  const handleInputFocus = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData((prev) => {
        return { ...prev, focused: event.target.name };
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

          setModalVisible(false);

          return [...prev];
        } else {
          setModalVisible(false);

          return [...prev, data];
        }
      });

      form.setFieldsValue(emptyCardState);

      setCardData(emptyCardState);
    },
    [editCard, setEditCard, setModalVisible, currentTheme],
  );

  useEffect(() => {
    if (editCard) {
      form.setFieldsValue(editCard);

      setCurrentTheme(editCard.theme || cardThemes[0].background);

      setCardData(editCard);
    }
  }, [editCard]);

  return (
    <Modal visible={isModalVisible} footer={null} closable={false}>
      <S.PayCard cardData={cardData} background={currentTheme} />
      <S.PaymentForm
        form={form}
        initialValues={cardData}
        name="paymentCards"
        layout="vertical"
        onFieldsChange={() => setFieldsChange(true)}
        onFinish={onFinish}
        onFinishFailed={(error) => console.log(error)}
      >
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
        <CardThemeItem
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          setFieldsChange={setFieldsChange}
        />
        {isFieldsChange && <ButtonsGroup onCancel={onCancel} />}
      </S.PaymentForm>
    </Modal>
  );
};
