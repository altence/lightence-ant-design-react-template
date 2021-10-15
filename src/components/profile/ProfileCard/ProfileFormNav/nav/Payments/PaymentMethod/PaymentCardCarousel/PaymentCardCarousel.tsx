import React, { useCallback, useMemo } from 'react';
import { Popconfirm } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Slider } from 'components/common/Slider/Slider';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { CreditCard } from '../PaymentForm/interfaces';
import theme from 'styles/theme';
import * as S from './PaymentCardCarousel.styles';
import { removeCreditCard } from 'api/users.api';

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

  const isTablet = useMediaQuery({ query: theme.media.md });

  const handleRemoveCard = useCallback(
    (number: string) => async () => {
      setCards((prev) => prev.filter((card) => card.number !== number));

      return removeCreditCard(number);
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
    [cards, handleRemoveCard, handleEditCard],
  );

  const slidesLayout = (slides: number) => {
    if (isTablet) {
      return slides > 2 ? 2.1 : 1;
    } else {
      return slides > 1 ? 1.2 : 1;
    }
  };

  return paymentCards.length > 0 ? (
    <S.SliderWrapper length={paymentCards.length}>
      <Slider spaceBetween={24} slidesPerView={(isTablet && cards.length > 1 && 2) || 1}>
        {paymentCards}
      </Slider>
    </S.SliderWrapper>
  ) : null;
};
