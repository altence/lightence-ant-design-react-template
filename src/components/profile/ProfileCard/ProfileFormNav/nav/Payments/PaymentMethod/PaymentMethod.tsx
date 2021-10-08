import React, { useCallback, useMemo, useState } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Card } from 'components/common/Card/Card';
import { PaymentCardCarousel } from './PaymentCardCarousel/PaymentCardCarousel';
import { FormItem, Title } from '../../../ProfileForm/ProfileForm.styles';
import { CreditCard } from './PaymentForm/interfaces';
import { cardThemes } from 'constants/cardThemes';
import theme from 'styles/theme';
import * as S from './PaymentMethod.styles';
import { PaymentModal } from './PaymentModal/PaymentModal';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
};

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [editCard, setEditCard] = useState<CreditCard | null>(null);
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
          cards={cards}
          setCards={setCards}
          setEditCard={setEditCard}
          handleOpenModal={handleOpenModal}
        />
        <S.AddBtn type="ghost" onClick={handleOpenModal}>
          {t('profile.nav.payments.addNewCard')}
        </S.AddBtn>
        <PaymentModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          form={form}
          cardData={cardData}
          editCard={editCard}
          setEditCard={setEditCard}
          setCardData={setCardData}
          setCards={setCards}
        />
      </S.Wrapper>
    ),
    [isTablet, cards, handleOpenModal, setCardData, setCards, isModalVisible, cardData],
  );

  return isTablet ? content : <Card padding="1.875rem 1rem">{content}</Card>;
};
