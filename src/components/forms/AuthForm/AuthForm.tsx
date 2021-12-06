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
import { Select, Option } from 'components/common/selects/Select/Select';
import * as S from './AuthForm.styles';

const { Step } = Steps;
interface Map {
  [key: string]: string | undefined;
}

export const AuthFrom: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = AntdForm.useForm();
  const [formValues, setFormValues] = useState<Map>({});
  const { t } = useTranslation();

  const formLabels: Map = {
    login: t('forms.authFormLabels.login'),
    password: t('forms.authFormLabels.password'),
    confirmPassword: t('forms.authFormLabels.confirmPassword'),
    salutation: t('forms.authFormLabels.salutation'),
    gender: t('forms.authFormLabels.gender'),
    firstName: t('forms.authFormLabels.firstName'),
    lastName: t('forms.authFormLabels.lastName'),
    birthday: t('forms.authFormLabels.birthday'),
    phone: t('forms.authFormLabels.phone'),
    email: t('forms.authFormLabels.email'),
    address1: t('forms.authFormLabels.address1'),
    address2: t('forms.authFormLabels.address2'),
    zipCode: t('forms.authFormLabels.zipCode'),
    city: t('forms.authFormLabels.city'),
    country: t('forms.authFormLabels.country'),
  };

  const next = () => {
    form.validateFields().then((values) => {
      if (values.birthday) {
        values.birthday = values.birthday.format('YYYY-MM-DD');
      }
      if (values.phone) {
        values.phone = values.prefix + values.phone;
      }
      setFormValues({ ...formValues, ...values });
      setCurrent(current + 1);
    });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleFinish = (values = {}) => {
    console.log('Finish:', values);
  };

  const onFinish = async (values = {}) => {
    await handleFinish(values);
  };

  const prefixSelector = (
    <FormItem name="prefix" noStyle>
      <Select style={{ width: 95 }}>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </Select>
    </FormItem>
  );

  const formFields = [
    <>
      <FormItem
        name="login"
        label={t('forms.authFormLabels.login')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="password"
        label={t('forms.authFormLabels.password')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <InputPassword />
      </FormItem>
      <FormItem
        name="confirmPassword"
        label={t('forms.authFormLabels.confirmPassword')}
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
    </>,
    <>
      <FormItem
        name="salutation"
        label={t('forms.authFormLabels.salutation')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <RadioGroup>
          <RadioButton value="mr">{t('forms.authFormLabels.mr')}</RadioButton>
          <RadioButton value="mrs">{t('forms.authFormLabels.mrs')}</RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem
        name="gender"
        label={t('forms.authFormLabels.gender')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="firstName"
        label={t('forms.authFormLabels.firstName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="lastName"
        label={t('forms.authFormLabels.lastName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="birthday"
        label={t('forms.authFormLabels.birthday')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </FormItem>
      <FormItem
        name="phone"
        label={t('forms.authFormLabels.phone')}
        rules={[{ required: true, message: t('common.requiredField') }]}
        style={{ width: '100%' }}
      >
        <Input addonBefore={prefixSelector} />
      </FormItem>
      <FormItem name="email" label={t('forms.authFormLabels.email')}>
        <Input />
      </FormItem>
    </>,
    <>
      <FormItem
        name="address1"
        label={t('forms.authFormLabels.address1')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="address2"
        label={t('forms.authFormLabels.address2')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="zipCode"
        label={t('forms.authFormLabels.zipCode')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="city"
        label={t('forms.authFormLabels.city')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="country"
        label={t('forms.authFormLabels.country')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
    </>,
    <S.Details key="details">
      {Object.keys(formValues)
        .filter((item) => item !== 'prefix')
        .map((item: string, index: number) => {
          return (
            <S.DetailsRow key={index}>
              <S.DetailsTitle>{formLabels[item]}:</S.DetailsTitle>
              <S.DetailsValue>{formValues[item]}</S.DetailsValue>
            </S.DetailsRow>
          );
        })}
    </S.Details>,
  ];
  const steps = [
    {
      title: t('forms.authFormLabels.country'),
    },
    {
      title: t('forms.authFormLabels.info'),
    },
    {
      title: t('forms.authFormLabels.location'),
    },
    {
      title: t('forms.authFormLabels.confirmDetails'),
    },
  ];

  return (
    <Form name="authForm" form={form} onFinish={onFinish} footer={() => <div />}>
      <S.Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} description="" />
        ))}
      </S.Steps>
      <div>{formFields[current]}</div>
      <div>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            {t('forms.authFormLabels.next')}
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => notification.open({ message: t('common.saved') })}>
            {t('forms.authFormLabels.done')}
          </Button>
        )}
        {current > 0 && (
          <Button type="default" style={{ margin: '0 8px' }} onClick={() => prev()}>
            {t('forms.authFormLabels.previous')}
          </Button>
        )}
      </div>
    </Form>
  );
};
