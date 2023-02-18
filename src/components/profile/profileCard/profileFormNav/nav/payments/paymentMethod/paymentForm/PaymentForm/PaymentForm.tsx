import React, { useCallback, useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { CardNumberItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardNumberItem/CardNumberItem';
import { CardholderItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardholderItem/CardholderItem';
import { ExpDateItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/ExpDateItem/ExpDateItem';
import { CVVItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CVVItem/CVVItem';
import { CardThemeItem } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/CardThemeItem/CardThemeItem';
import { cardThemes } from '@app/constants/cardThemes';
import * as S from './PaymentForm.styles';
import { PaymentCard } from '@app/interfaces/interfaces';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const clearCardData: PaymentCard = {
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
  onFormFinish: (card: PaymentCard) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ closeModal, onFormFinish }) => {
  const [cardData, setCardData] = useState<PaymentCard>(clearCardData);
  const [isLoading, setLoading] = useState(false);
  const [isFieldsChanged, setFieldsChanged] = useState(false);

  const [form] = BaseForm.useForm();

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
    (values: PaymentCard) => {
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
        <BaseRow gutter={[20, 0]}>
          <BaseCol span={12}>
            <ExpDateItem handleInputFocus={handleInputFocus} />
          </BaseCol>
          <BaseCol span={12}>
            <CVVItem handleInputFocus={handleInputFocus} />
          </BaseCol>
        </BaseRow>
        <CardThemeItem cardData={cardData} setCardData={setCardData} />
      </S.FormItemsWrapper>
    </BaseButtonsForm>
  );
};
