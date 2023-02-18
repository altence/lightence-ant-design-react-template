import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import * as S from '../StepForm.styles';
import React from 'react';

export const Step3: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.FormContent>
      <BaseForm.Item
        name="address1"
        label={`${t('common.address')} 1`}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="address2"
        label={`${t('common.address')} 2`}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="zipCode"
        label={t('common.zipcode')}
        rules={[{ required: true, message: t('forms.stepFormLabels.zipCodeError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="city"
        label={t('common.city')}
        rules={[{ required: true, message: t('forms.stepFormLabels.cityError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
      <BaseForm.Item
        name="country"
        label={t('common.country')}
        rules={[{ required: true, message: t('forms.stepFormLabels.countryError') }]}
      >
        <BaseInput />
      </BaseForm.Item>
    </S.FormContent>
  );
};
