import React, { useCallback, useState } from 'react';
import { Form, notification } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';

interface ProfileFormProps {
  initialValues?: any;
  form?: any;
  footer?: React.ReactNode;
  onFinish?: (values: any) => void;
  onFinishFailed?: (error: any) => void;
  name: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  initialValues,
  form,
  footer,
  onFinish,
  onFinishFailed,
  name,
  children,
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [formDefault] = Form.useForm();

  const onCancel = useCallback(() => {
    formDefault.resetFields();
    setFieldsChange(false);
  }, [setFieldsChange]);

  const onFinishFailedDefault = useCallback((error) => {
    notification.open({
      message: error.errorFields.map((item: any) => item.errors),
    });
  }, []);

  const onFinishDefault = useCallback((values: []) => {
    console.log(values);
  }, []);

  const onFieldsChange = useCallback(() => {
    setFieldsChange(true);
  }, [setFieldsChange]);

  return (
    <Form
      initialValues={initialValues}
      form={form || formDefault}
      name={name}
      layout="vertical"
      onFinish={onFinish || onFinishDefault}
      onFinishFailed={onFinishFailed || onFinishFailedDefault}
      onFieldsChange={onFieldsChange}
    >
      {children}
      {isFieldsChange && (footer || <ButtonsGroup onCancel={onCancel} />)}
    </Form>
  );
};
