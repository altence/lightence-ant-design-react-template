import React, { useCallback, useState } from 'react';
import { Modal, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { SwiperSlide } from 'swiper/react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'components/common/Card/Card';
import { FormItem, Title } from '../../../ProfileForm/ProfileForm.styles';
import { PaymentForm } from './PaymentForm/PaymentForm';
import { CreditCard } from './PaymentForm/interfaces';
import { Slider } from 'components/common/Slider/Slider';
import { PaymentCard } from './PaymentCard/PaymentCard';
import { cardThemes } from 'constants/cardThemes';
import theme from 'styles/theme';
import * as S from './PaymentMethod.styles';

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

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    form.setFieldsValue(clearCardData);
    setCardData(clearCardData);
    editCard && setEditCard(null);
  }, [setModalVisible, setCardData, editCard, setEditCard]);

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

    [setEditCard, setModalVisible],
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

  const content = useMemo(
    () => (
      <S.Wrapper>
        <FormItem>
          <Title>{t('profile.nav.payments.paymentMethod')}</Title>
        </FormItem>
        {paymentCards.length > 0 && (
          <S.SliderWrapper>
            <Slider spaceBetween={24} slidesPerView={(isTablet && cards.length > 1 && 2) || 1}>
              {paymentCards}
            </Slider>
          </S.SliderWrapper>
        )}
        <S.AddBtn type="ghost" onClick={handleOpenModal}>
          {t('profile.nav.payments.addNewCard')}
        </S.AddBtn>
        <Modal visible={isModalVisible} onCancel={handleCloseModal} footer={null} closable={false}>
          <PaymentForm
            form={form}
            cardData={cardData}
            editCard={editCard}
            setCardData={setCardData}
            setCards={setCards}
            closeModal={handleCloseModal}
          />
        </Modal>
      </S.Wrapper>
    ),
    [
      paymentCards,
      isTablet,
      cards,
      handleOpenModal,
      handleCloseModal,
      setCardData,
      setCards,
      handleCloseModal,
      isModalVisible,
      cardData,
    ],
  );

  return isTablet ? content : <Card padding="1.875rem 1rem">{content}</Card>;
};
