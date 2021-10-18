import React, { useCallback, useMemo, useState } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Card } from 'components/common/Card/Card';
import { PaymentCardCarousel } from './PaymentCardCarousel/PaymentCardCarousel';
import { FormItem, Title } from '../../../../../../common/Form/Form.styles';
import { CreditCard } from './PaymentForm/interfaces';
import { cardThemes } from 'constants/cardThemes';
import theme from 'styles/theme';
import { PaymentModal } from './PaymentModal/PaymentModal';
import * as S from './PaymentMethod.styles';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
  isEdit: false,
};

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);
  const [cards, setCards] = useState<CreditCard[]>([
    {
      name: 'Dean James',
      cvc: '144',
      expiry: '11/24',
      number: '4255 2003 0168 9006',
      focused: '',
      background: cardThemes[0].background,
      isEdit: false,
    },
    {
      name: 'Walker Alan',
      cvc: '179',
      expiry: '5/23',
      number: '5245 0017 2000 0164',
      focused: '',
      background: cardThemes[0].background,
      isEdit: false,
    },
    {
      name: 'Jackson Michael',
      cvc: '345',
      expiry: '12/22',
      number: '4255 1000 2046 8006',
      focused: '',
      background: cardThemes[0].background,
      isEdit: false,
    },
    {
      name: 'Ivanov Ivan',
      cvc: '222',
      expiry: '09/24',
      number: '5205 0024 2535 5235',
      focused: '',
      background: cardThemes[0].background,
      isEdit: false,
    },
  ]);

  const [form] = Form.useForm();

  const isTablet = useMediaQuery({ query: theme.media.md });

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const content = useMemo(
    () => (
      <S.Wrapper>
        <FormItem>
          <Title>{t('profile.nav.payments.paymentMethod')}</Title>
        </FormItem>
        <PaymentCardCarousel
          form={form}
          cards={cards}
          setCards={setCards}
          handleOpenModal={handleOpenModal}
          setCardData={setCardData}
        />
        <S.AddBtn type="ghost" onClick={handleOpenModal}>
          {t('profile.nav.payments.addNewCard')}
        </S.AddBtn>
        <PaymentModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          form={form}
          cardData={cardData}
          setCardData={setCardData}
          setCards={setCards}
        />
      </S.Wrapper>
    ),
    [isTablet, cards, handleOpenModal, setCardData, setCards, isModalVisible, cardData],
  );

  return isTablet ? content : <Card>{content}</Card>;
};
