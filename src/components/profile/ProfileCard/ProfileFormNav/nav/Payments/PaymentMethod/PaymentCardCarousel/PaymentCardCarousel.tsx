import React, { useCallback, useMemo } from 'react';
import { FormInstance, Popconfirm } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
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
          <S.BtnWrapper>
            <Button type="link" icon={<EditOutlined />} onClick={handleEditCard(card)} />
            <Popconfirm title={t('common.deleteQuestion')} onConfirm={handleRemoveCard(card.number)}>
              <Button type="link" icon={<DeleteOutlined />} />
            </Popconfirm>
          </S.BtnWrapper>
        </PaymentCard>
      )),
    [cards, handleRemoveCard, handleEditCard, t],
  );

  const layout = useMemo(
    () => (slidesPerView: number, value: number) =>
      paymentCards.length > slidesPerView ? slidesPerView + value : slidesPerView,
    [paymentCards],
  );

  return (
    <S.CarouselWrapper length={paymentCards.length} isEnd={true}>
      <Carousel slidesToShow={layout(1, 0.1)}>{paymentCards}</Carousel>
    </S.CarouselWrapper>
  );
};
