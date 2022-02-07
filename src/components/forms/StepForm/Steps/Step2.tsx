import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Input } from '@app/components/common/inputs/Input/Input';
import { RadioButton, RadioGroup } from '@app/components/common/Radio/Radio';
import { DatePicker } from '@app/components/common/pickers/DatePicker';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import * as S from '../StepForm.styles';
import React from 'react';

export const Step2: React.FC = () => {
  const { t } = useTranslation();

  const prefixSelector = (
    <BaseForm.Item name="prefix" noStyle>
      <S.Select>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </S.Select>
    </BaseForm.Item>
  );

  return (
    <S.FormContent>
      <BaseForm.Item
        name="salutation"
        label={t('forms.stepFormLabels.salutation')}
        rules={[{ required: true, message: t('forms.stepFormLabels.salutationError') }]}
      >
        <RadioGroup>
          <RadioButton value="mr">{t('forms.stepFormLabels.mr')}</RadioButton>
          <RadioButton value="mrs">{t('forms.stepFormLabels.mrs')}</RadioButton>
        </RadioGroup>
      </BaseForm.Item>
      <BaseForm.Item
        name="gender"
        label={t('forms.stepFormLabels.gender')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Select placeholder={t('forms.stepFormLabels.gender')}>
          <Option value="male">{t('forms.stepFormLabels.male')}</Option>
          <Option value="female">{t('forms.stepFormLabels.female')}</Option>
        </Select>
      </BaseForm.Item>
      <BaseForm.Item
        name="firstName"
        label={t('common.firstName')}
        rules={[{ required: true, message: t('forms.stepFormLabels.firstNameError') }]}
      >
        <Input />
      </BaseForm.Item>
      <BaseForm.Item
        name="lastName"
        label={t('common.lastName')}
        rules={[{ required: true, message: t('forms.stepFormLabels.lastNameError') }]}
      >
        <Input />
      </BaseForm.Item>
      <BaseForm.Item
        name="birthday"
        label={t('forms.stepFormLabels.birthday')}
        rules={[{ required: true, message: t('forms.stepFormLabels.birthdayError') }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </BaseForm.Item>
      <S.PhoneItem
        name="phone"
        label={t('common.phone')}
        rules={[{ required: true, message: t('forms.stepFormLabels.phoneError') }]}
      >
        <Input addonBefore={prefixSelector} />
      </S.PhoneItem>
      <BaseForm.Item
        name="email"
        label={t('common.email')}
        rules={[
          {
            type: 'email',
            message: t('common.notValidEmail'),
          },
        ]}
      >
        <Input />
      </BaseForm.Item>
    </S.FormContent>
  );
};
