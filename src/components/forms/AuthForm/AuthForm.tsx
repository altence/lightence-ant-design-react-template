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

const formLabels: Map = {
  login: 'Login',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  salutation: 'Salutation',
  gender: 'Gender',
  firstName: 'First Name',
  lastName: 'Last Name',
  birthDay: 'Birth Day',
  phone: 'Phone',
  email: 'Email',
  address1: 'Address 1',
  address2: 'Address 2',
  zipCode: 'Zip code',
  city: 'City',
  country: 'Country',
};

export const AuthFrom: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = AntdForm.useForm();
  const [formValues, setFormValues] = useState<Map>({});

  const next = () => {
    form.validateFields().then((values) => {
      if (values.birthDay) {
        values.birthDay = values.birthDay.format('YYYY-MM-DD');
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
  const { t } = useTranslation();
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
      <FormItem name="login" label="Email/Login" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="password" label="Password" rules={[{ required: true, message: t('common.requiredField') }]}>
        <InputPassword />
      </FormItem>
      <FormItem
        name="confirmPassword"
        label="Confirm Password"
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
      <FormItem name="salutation" label="Salutation" rules={[{ required: true, message: 'Please pick an item!' }]}>
        <RadioGroup>
          <RadioButton value="mr">Mr</RadioButton>
          <RadioButton value="mrs">Mrs</RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem name="gender" label="Gender" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="firstName" label="First Name" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="lastName" label="Last Name" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="birthDay" label="Birth day" rules={[{ required: true, message: t('common.requiredField') }]}>
        <DatePicker format="YYYY-MM-DD" />
      </FormItem>
      <FormItem
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
        style={{ width: '100%' }}
      >
        <Input addonBefore={prefixSelector} />
      </FormItem>
      <FormItem name="email" label="Email">
        <Input />
      </FormItem>
    </>,
    <>
      <FormItem name="address1" label="Address 1" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="address2" label="Address 1" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="zipCode" label="Zip code" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="city" label="City" rules={[{ required: true, message: t('common.requiredField') }]}>
        <Input />
      </FormItem>
      <FormItem name="country" label="Country" rules={[{ required: true, message: t('common.requiredField') }]}>
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
      title: 'Login',
    },
    {
      title: 'Info',
    },
    {
      title: 'Location',
    },
    {
      title: 'Confirm Details',
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
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => notification.open({ message: t('common.saved') })}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button type="default" style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Form>
  );
};
