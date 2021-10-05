import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwiperSlide } from 'swiper/react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'components/common/Card/Card';
import { Slider } from 'components/common/Slider/Slider';
import { PaymentCardModal } from './PaymentCardModal/PaymentCardModal';
import { CreditCard, PaymentCard } from './PaymentCard/PaymentCard';
import { cardThemes } from 'constants/cardThemes';
import { Title } from '../../../ProfileForm/ProfileForm.styles';
import * as S from './PaymentMethod.styles';

export const PaymentMethod: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [editCard, setEditCard] = useState<CreditCard | null>(null);

  const { t } = useTranslation();

  const handleRemove = useCallback(
    (number: string) => () => {
      setCards((prev) => prev.filter((card) => card.number !== number));
    },
    [setCards],
  );

  const handleEdit = useCallback(
    (card: CreditCard) => () => {
      setEditCard(card);

      setModalVisible(true);
    },

    [setEditCard, setModalVisible],
  );

  const handleAdd = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const paymentCards = useMemo(
    () =>
      cards.map((card, index) => (
        <SwiperSlide key={index}>
          <PaymentCard cardData={card} background={card.theme || cardThemes[0].background}>
            <S.BtnWrapper>
              <Button type="link" icon={<EditOutlined />} onClick={handleEdit(card)} />
              <Popconfirm title={t('common.deleteQuestion')} onConfirm={handleRemove(card.number)}>
                <Button type="link" icon={<DeleteOutlined />} />
              </Popconfirm>
            </S.BtnWrapper>
          </PaymentCard>
        </SwiperSlide>
      )),
    [cards, cardThemes, handleEdit, handleRemove],
  );

  return (
    <Card padding="1.875rem 1rem">
      <Title>{t('profile.nav.payments.paymentMethod')}</Title>
      {cards.length > 0 && (
        <S.SliderWrapper>
          <Slider spaceBetween={24} slidesPerView={1}>
            {paymentCards}
          </Slider>
        </S.SliderWrapper>
      )}
      <S.AddBtn type="ghost" onClick={handleAdd}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <PaymentCardModal
        editCard={editCard}
        setEditCard={setEditCard}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setCards={setCards}
      />
    </Card>
  );
};
