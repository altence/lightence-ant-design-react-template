import React, { useCallback, useMemo, useState } from 'react';
import { FormInstance, Popconfirm } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Carousel } from 'components/common/Carousel/Carousel';
import { PaymentCard } from '../PaymentCard/PaymentCard';
import { CreditCard } from '../PaymentForm/interfaces';
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
  const { t } = useTranslation();

  const [isCarouselEnd, setCarouselEnd] = useState(false);

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

    [handleOpenModal, setCardData],
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

  const layout = useMemo(
    () => (slidesPerView: number, value: number) =>
      paymentCards.length > slidesPerView ? slidesPerView + value : slidesPerView,
    [paymentCards],
  );

  return (
    <S.CarouselWrapper length={paymentCards.length} isEnd={isCarouselEnd}>
      <Carousel
        spaceBetween={16}
        slidesPerView={layout(1, 0.1)}
        breakpoints={{
          400: {
            slidesPerView: layout(1, 0.2),
          },
          450: {
            slidesPerView: layout(1, 0.4),
          },
          500: {
            slidesPerView: layout(1, 0.5),
          },
          630: {
            slidesPerView: layout(2, 0.1),
          },
          768: {
            slidesPerView: layout(1, 0.5),
          },
          900: {
            slidesPerView: layout(2, 0.1),
          },
          1000: {
            slidesPerView: layout(2, 0.3),
          },
          1100: {
            slidesPerView: layout(2, 0.5),
          },
          1250: {
            slidesPerView: layout(3, 0.1),
          },
          1280: {
            slidesPerView: layout(1, 0.5),
          },
          1330: {
            slidesPerView: layout(2, 0.1),
          },
          1500: {
            slidesPerView: layout(2, 0.4),
          },
          1700: {
            slidesPerView: layout(2, 0.5),
          },
          1920: {
            slidesPerView: layout(3, 0.1),
          },
        }}
        onSlideChange={(swiper) => setCarouselEnd(swiper.isEnd)}
      >
        {paymentCards}
      </Carousel>
    </S.CarouselWrapper>
  );
};
