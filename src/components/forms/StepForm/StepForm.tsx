import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { Step4 } from './Steps/Step4';
import { notificationController } from '@app/controllers/notificationController';
import { Dates } from '@app/constants/Dates';
import { mergeBy } from '@app/utils/utils';
import * as S from './StepForm.styles';
import { Steps } from './StepForm.styles';
interface FormValues {
  [key: string]: string | undefined;
}

interface FieldData {
  name: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

export const StepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();
  const [fields, setFields] = useState<FieldData[]>([
    { name: 'login', value: 'Jerri' },
    { name: 'password', value: '123456' },
    { name: 'confirmPassword', value: '123456' },
    { name: 'salutation', value: 'mr' },
    { name: 'gender', value: 'male' },
    { name: 'firstName', value: 'John' },
    { name: 'lastName', value: 'Black' },
    { name: 'birthday', value: Dates.getDate(1576789200000) },
    { name: 'phone', value: '298573124' },
    { name: 'email', value: '' },
    { name: 'address1', value: 'Slobodskay street' },
    { name: 'address2', value: 'Nevski street' },
    { name: 'zipCode', value: '435123' },
    { name: 'city', value: 'Minsk' },
    { name: 'country', value: 'Belarus' },
    { name: 'prefix', value: '+7' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const formLabels: FormValues = {
    login: t('forms.stepFormLabels.login'),
    password: t('common.password'),
    confirmPassword: t('common.confirmPassword'),
    salutation: t('forms.stepFormLabels.salutation'),
    gender: t('forms.stepFormLabels.gender'),
    firstName: t('common.firstName'),
    lastName: t('common.lastName'),
    birthday: t('forms.stepFormLabels.birthday'),
    phone: t('common.phone'),
    email: t('common.email'),
    address1: `${t('common.address')} 1`,
    address2: `${t('common.address')} 2`,
    zipCode: t('common.zipcode'),
    city: t('common.city'),
    country: t('common.country'),
  };

  const formValues = fields
    .filter((item) => item.name !== 'prefix')
    .map((item) => ({
      name: formLabels[item.name],
      value: String(item.name === 'birthday' && item.value ? item.value.format('YYYY-MM-DD') : item.value),
    }));

  const next = () => {
    form.validateFields().then(() => {
      setCurrent(current + 1);
    });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = () => {
    setIsLoading(true);
    setTimeout(() => {
      notificationController.success({ message: t('common.success') });
      setIsLoading(false);
      setCurrent(0);
    }, 1500);
  };

  const steps = [
    {
      title: t('common.country'),
    },
    {
      title: t('forms.stepFormLabels.info'),
    },
    {
      title: t('forms.stepFormLabels.location'),
    },
    {
      title: t('forms.stepFormLabels.confirm'),
    },
  ];

  const formFieldsUi = [
    <Step1 key="1" />,
    <Step2 key="2" />,
    <Step3 key="3" />,
    <Step4 key="4" formValues={formValues} />,
  ];

  return (
    <BaseForm
      name="stepForm"
      form={form}
      fields={fields}
      onFieldsChange={(_, allFields) => {
        const currentFields = allFields.map((item) => ({
          name: Array.isArray(item.name) ? item.name[0] : '',
          value: item.value,
        }));
        const uniqueData = mergeBy(fields, currentFields, 'name');
        setFields(uniqueData);
      }}
    >
      <Steps size="small" current={current} items={steps} />

      <div>{formFieldsUi[current]}</div>
      <S.Row>
        {current > 0 && (
          <S.PrevButton type="default" onClick={() => prev()}>
            {t('forms.stepFormLabels.previous')}
          </S.PrevButton>
        )}
        {current < steps.length - 1 && (
          <BaseButton type="primary" onClick={() => next()}>
            {t('forms.stepFormLabels.next')}
          </BaseButton>
        )}
        {current === steps.length - 1 && (
          <BaseButton type="primary" onClick={onFinish} loading={isLoading}>
            {t('forms.stepFormLabels.done')}
          </BaseButton>
        )}
      </S.Row>
    </BaseForm>
  );
};
