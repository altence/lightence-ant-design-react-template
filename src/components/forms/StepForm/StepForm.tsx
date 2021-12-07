import { useState } from 'react';
import { Form as AntdForm, notification, Steps } from 'antd';
import { Form } from '../../common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from '../../common/inputs/Input/Input';
import { InputPassword } from '../../common/inputs/InputPassword/InputPassword';
import { useTranslation } from 'react-i18next';
import { Button } from '../../common/buttons/Button/Button';
import { RadioButton, RadioGroup } from 'components/common/Radio/Radio';
import { DatePicker } from 'components/common/pickers/DatePicker';
import { Dates } from 'constants/Dates';
import { Option } from 'components/common/selects/Select/Select';
import * as S from './StepForm.styles';
import { mergeBy } from 'utils/utils';

const { Step } = Steps;
interface FormValues {
  [key: string]: string | undefined;
}

interface FieldData {
  name: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

interface Field {
  name?: string;
  value: string;
}

export const StepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = AntdForm.useForm();
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
    { name: 'prefix', value: '+375' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const formLabels: FormValues = {
    login: t('forms.stepFormLabels.login'),
    password: t('forms.stepFormLabels.password'),
    confirmPassword: t('forms.stepFormLabels.confirmPassword'),
    salutation: t('forms.stepFormLabels.salutation'),
    gender: t('forms.stepFormLabels.gender'),
    firstName: t('forms.stepFormLabels.firstName'),
    lastName: t('forms.stepFormLabels.lastName'),
    birthday: t('forms.stepFormLabels.birthday'),
    phone: t('forms.stepFormLabels.phone'),
    email: t('forms.stepFormLabels.email'),
    address1: t('forms.stepFormLabels.address1'),
    address2: t('forms.stepFormLabels.address2'),
    zipCode: t('forms.stepFormLabels.zipCode'),
    city: t('forms.stepFormLabels.city'),
    country: t('forms.stepFormLabels.country'),
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
      notification.open({ message: t('common.saved') });
      setIsLoading(false);
      setCurrent(0);
    }, 1500);
  };

  const steps = [
    {
      title: t('forms.stepFormLabels.country'),
    },
    {
      title: t('forms.stepFormLabels.info'),
    },
    {
      title: t('forms.stepFormLabels.location'),
    },
    {
      title: t('forms.stepFormLabels.confirmDetails'),
    },
  ];

  const prefixSelector = (
    <FormItem name="prefix" noStyle>
      <S.Select>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </S.Select>
    </FormItem>
  );

  const formFieldsUi = [
    <S.FormContent key="1">
      <FormItem
        name="login"
        label={t('forms.stepFormLabels.login')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="password"
        label={t('forms.stepFormLabels.password')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <InputPassword />
      </FormItem>
      <FormItem
        name="confirmPassword"
        label={t('forms.stepFormLabels.confirmPassword')}
        dependencies={['password']}
        rules={[
          { required: true, message: t('common.requiredField') },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t('common.confirmPasswordError')));
            },
          }),
        ]}
      >
        <InputPassword />
      </FormItem>
    </S.FormContent>,
    <S.FormContent key="2">
      <FormItem
        name="salutation"
        label={t('forms.stepFormLabels.salutation')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <RadioGroup>
          <RadioButton value="mr">{t('forms.stepFormLabels.mr')}</RadioButton>
          <RadioButton value="mrs">{t('forms.stepFormLabels.mrs')}</RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem
        name="gender"
        label={t('forms.stepFormLabels.gender')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="firstName"
        label={t('forms.stepFormLabels.firstName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="lastName"
        label={t('forms.stepFormLabels.lastName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="birthday"
        label={t('forms.stepFormLabels.birthday')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </FormItem>
      <S.PhoneItem
        name="phone"
        label={t('forms.stepFormLabels.phone')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input addonBefore={prefixSelector} />
      </S.PhoneItem>
      <FormItem
        name="email"
        label={t('forms.stepFormLabels.email')}
        rules={[
          {
            type: 'email',
            message: t('profile.nav.personalInfo.notValidEmail'),
          },
        ]}
      >
        <Input />
      </FormItem>
    </S.FormContent>,
    <S.FormContent key="3">
      <FormItem
        name="address1"
        label={t('forms.stepFormLabels.address1')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="address2"
        label={t('forms.stepFormLabels.address2')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="zipCode"
        label={t('forms.stepFormLabels.zipCode')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="city"
        label={t('forms.stepFormLabels.city')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="country"
        label={t('forms.stepFormLabels.country')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
    </S.FormContent>,
    <S.Details key="4">
      {formValues
        .filter((item) => !!item.value)
        .map((item: Field, index: number) => {
          return (
            <S.DetailsRow key={index}>
              <S.DetailsTitle>{item.name}</S.DetailsTitle>
              <S.DetailsValue>{item.value}</S.DetailsValue>
            </S.DetailsRow>
          );
        })}
    </S.Details>,
  ];

  return (
    <Form
      name="stepForm"
      form={form}
      footer={() => <div />}
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
      <S.Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} description="" />
        ))}
      </S.Steps>
      <S.ContentWrapper>
        <S.Content>
          <div>{formFieldsUi[current]}</div>
          <div>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                {t('forms.stepFormLabels.next')}
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={onFinish} loading={isLoading}>
                {t('forms.stepFormLabels.done')}
              </Button>
            )}
            {current > 0 && (
              <S.PrevButton type="default" onClick={() => prev()}>
                {t('forms.stepFormLabels.previous')}
              </S.PrevButton>
            )}
          </div>
        </S.Content>
      </S.ContentWrapper>
    </Form>
  );
};
