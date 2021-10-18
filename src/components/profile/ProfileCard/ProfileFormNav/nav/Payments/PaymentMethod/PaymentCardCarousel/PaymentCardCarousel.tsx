import React, { useCallback, useMemo } from 'react';
import { FormInstance, Popconfirm } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Slider } from 'components/common/Slider/Slider';
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
    () => (slidesPerView: number) => paymentCards.length > slidesPerView ? slidesPerView + 0.2 : slidesPerView,
    [paymentCards],
  );

  return (
    <S.SliderWrapper length={paymentCards.length}>
      <Slider
        spaceBetween={10}
        slidesPerView={layout(1)}
        breakpoints={{
          650: {
            slidesPerView: layout(2),
          },
          1000: {
            slidesPerView: layout(3),
          },
          1280: {
            slidesPerView: layout(2),
          },
          1500: {
            slidesPerView: layout(3),
          },
          1920: {
            slidesPerView: layout(4),
          },
        }}
      >
        {paymentCards}
      </Slider>
    </S.SliderWrapper>
  );
};
