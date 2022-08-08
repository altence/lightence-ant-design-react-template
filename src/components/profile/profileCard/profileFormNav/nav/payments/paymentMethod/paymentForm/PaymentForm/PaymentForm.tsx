import React, { useCallback, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { CardNumberItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardNumberItem/CardNumberItem';
import { CardholderItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardholderItem/CardholderItem';
import { ExpDateItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/ExpDateItem/ExpDateItem';
import { CVVItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CVVItem/CVVItem';
import { CardThemeItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardThemeItem/CardThemeItem';
import { CreditCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';
import { cardThemes } from '@app/constants/cardThemes';
import * as S from './PaymentForm.styles';

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
  const [isLoading, setLoading] = useState(false);
  const [isFieldsChanged, setFieldsChanged] = useState(false);

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
    (values: CreditCard) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        const card = { ...values, background: cardData.background };
        onFormFinish(card);
        setCardData(clearCardData);
        closeModal();
        form.setFieldsValue(clearCardData);
      }, 1000);
    },
    [cardData.background, closeModal, form, onFormFinish],
  );

  return (
    <BaseButtonsForm
      form={form}
      requiredMark="optional"
      name="paymentCard"
      onFinish={onFinish}
      footer={<BaseButtonsGroup loading={isLoading} onCancel={closeModal} />}
      initialValues={clearCardData}
      onValuesChange={(field) => {
        const values = Object.entries(field)[0];

        setCardData({ ...cardData, [values[0]]: values[1] });
      }}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
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
    </BaseButtonsForm>
  );
};
