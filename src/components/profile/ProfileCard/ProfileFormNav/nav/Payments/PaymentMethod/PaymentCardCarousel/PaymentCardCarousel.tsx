import React, { useCallback, useMemo } from 'react';
import { FormInstance } from 'antd';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { CreditCard } from '../PaymentForm/interfaces';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { ActionButtons } from './ActionButtons/ActionButtons';
import { removeCreditCard } from 'api/users.api';
import * as S from './PaymentCardCarousel.styles';

interface PaymentCardCarouselProps {
  cards: CreditCard[];
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
  setCardData: (state: CreditCard) => void;
  handleOpenModal: () => void;
  form: FormInstance;
}

export const PaymentCardCarousel: React.FC<PaymentCardCarouselProps> = ({
  form,
  cards,
  setCards,
  setCardData,
  handleOpenModal,
}) => {
  const handleRemoveCard = useCallback(
    (number: string) => async () => {
      setCards((prev) => prev.filter((card) => card.number !== number));

      return removeCreditCard(number);
    },
    [setCards],
  );

  const handleEditCard = useCallback(
    (card: CreditCard) => () => {
      const editCard = { ...card, isEdit: true };
      setCardData(editCard);
      form.setFieldsValue(editCard);
      handleOpenModal();
    },

    [handleOpenModal, setCardData, form],
  );

  const paymentCards = useMemo(
    () =>
      cards.map((card, index) => (
        <PaymentCard key={index} cardData={card}>
          <ActionButtons onEdit={handleEditCard(card)} onRemove={handleRemoveCard(card.number)} />
        </PaymentCard>
      )),
    [cards, handleRemoveCard, handleEditCard, t],
  );

  return (
    <S.CarouselWrapper>
      <Carousel>{paymentCards}</Carousel>
    </S.CarouselWrapper>
  );
};
