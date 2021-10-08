import React, { useCallback, useMemo } from 'react';
import { Button, Popconfirm } from 'antd';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Slider } from 'components/common/Slider/Slider';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { CreditCard } from '../PaymentForm/interfaces';
import * as S from './PaymentCardCarousel.styles';

interface PaymentCardCarouselProps {
  cards: CreditCard[];
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
  setEditCard: (state: CreditCard) => void;
  handleOpenModal: () => void;
}

export const PaymentCardCarousel: React.FC<PaymentCardCarouselProps> = ({
  cards,
  setCards,
  setEditCard,
  handleOpenModal,
}) => {
  const { t } = useTranslation();

  const handleRemoveCard = useCallback(
    (number: string) => () => {
      setCards((prev) => prev.filter((card) => card.number !== number));
    },
    [setCards],
  );

  const handleEditCard = useCallback(
    (card: CreditCard) => () => {
      setEditCard(card);
      handleOpenModal();
    },

    [setEditCard, handleOpenModal],
  );

  const paymentCards = useMemo(
    () =>
      cards.map((card, index) => (
        <SwiperSlide key={index}>
          <PaymentCard cardData={card}>
            <S.BtnWrapper>
              <Button type="link" icon={<EditOutlined />} onClick={handleEditCard(card)} />
              <Popconfirm title={t('common.deleteQuestion')} onConfirm={handleRemoveCard(card.number)}>
                <Button type="link" icon={<DeleteOutlined />} />
              </Popconfirm>
            </S.BtnWrapper>
          </PaymentCard>
        </SwiperSlide>
      )),
    [cards, handleRemoveCard],
  );

  return paymentCards.length > 0 ? (
    <S.SliderWrapper>
      <Slider spaceBetween={24} slidesPerView={1}>
        {paymentCards}
      </Slider>
    </S.SliderWrapper>
  ) : null;
};
