import React, { useCallback, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { CardNumberItem } from '../CardNumberItem/CardNumberItem';
import { CardholderItem } from '../CardholderItem/CardholderItem';
import { ExpDateItem } from '../ExpDateItem/ExpDateItem';
import { CVVItem } from '../CVVItem/CVVItem';
import { CardThemeItem } from '../CardThemeItem/CardThemeItem';
import { CreditCard } from '../interfaces';
import * as S from './PaymentForm.styles';
import { ProfileForm } from '@app/components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm';
import { cardThemes } from '@app/constants/cardThemes';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
  isEdit: false,
};

interface PaymentFormProps {
  closeModal: () => void;
  onFormFinish: (card: CreditCard) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ closeModal, onFormFinish }) => {
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);

  const [form] = Form.useForm();

  const handleInputFocus = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardData({
        ...cardData,
        focused: event.target.name,
      });
    },
    [setCardData, cardData],
  );

  const onFinish = useCallback(
    async (values) => {
      const card = { ...values, background: cardData.background };
      onFormFinish(card);
      setCardData(clearCardData);
      closeModal();
      form.setFieldsValue(clearCardData);
    },
    [cardData.background, closeModal, form, onFormFinish],
  );

  return (
    <ProfileForm
      form={form}
      name="paymentCard"
      trigger={cardData}
      onFinish={onFinish}
      footer={(loading) => <S.PaymentButtons loading={loading} onCancel={closeModal} />}
      initialValues={clearCardData}
      onValuesChange={(field) => {
        const values = Object.entries(field)[0];

        setCardData({ ...cardData, [values[0]]: values[1] });
      }}
    >
      <S.PayCard cardData={cardData} />
      <S.FormItemsWrapper>
        <CardNumberItem handleInputFocus={handleInputFocus} />
        <CardholderItem handleInputFocus={handleInputFocus} />
        <Row gutter={[20, 0]}>
          <Col span={12}>
            <ExpDateItem handleInputFocus={handleInputFocus} />
          </Col>
          <Col span={12}>
            <CVVItem handleInputFocus={handleInputFocus} />
          </Col>
        </Row>
        <CardThemeItem cardData={cardData} setCardData={setCardData} />
      </S.FormItemsWrapper>
    </ProfileForm>
  );
};
