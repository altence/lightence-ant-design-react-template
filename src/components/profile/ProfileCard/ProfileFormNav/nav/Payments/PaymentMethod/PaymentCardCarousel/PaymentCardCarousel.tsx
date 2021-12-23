import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FormInstance } from 'antd';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { CreditCard } from '../PaymentForm/interfaces';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { ActionButtons } from './ActionButtons/ActionButtons';
import { removeCreditCard } from 'api/users.api';
import { ThemeContext } from 'styled-components';
import { useDimensions } from '@app/hooks/useDimensions';
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
  const [cardRef, setCardRef] = useState<Element | null>(null);

  useEffect(() => {
    setCardRef(document.querySelector('.slick-current > div > div'));
  }, []);

  const { width: cardWidth } = useDimensions({ current: cardRef });

  const theme = useContext(ThemeContext);

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
    <S.CarouselWrapper cardWidth={cardWidth}>
      <Carousel
        slidesToShow={3}
        responsive={[
          {
            breakpoint: theme.breakpoints.xxl - 1,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: theme.breakpoints.sm - 1,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {paymentCards}
      </Carousel>
    </S.CarouselWrapper>
  );
};
