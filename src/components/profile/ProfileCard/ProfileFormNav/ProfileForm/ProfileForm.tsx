import React, { useCallback, useEffect, useState } from 'react';
import { Form, FormInstance, notification } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';

interface ProfileFormProps {
  form?: FormInstance;
  footer?: React.ReactNode;
  trigger?: React.ReactNode;
  onCancel?: () => void;
  onFinish?: (values: any) => void;
  onFinishFailed?: (error: any) => void;
  name: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  form,
  footer,
  trigger,
  onCancel,
  onFinish,
  onFinishFailed,
  name,
  children,
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [formDefault] = Form.useForm();

  const onCancelDefault = useCallback(() => {
    (form || formDefault).resetFields();
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

  useEffect(() => {
    trigger && setFieldsChange(true);
  }, [trigger]);

  return (
    <Form
      form={form || formDefault}
      name={name}
      layout="vertical"
      onFinish={onFinish || onFinishDefault}
      onFinishFailed={onFinishFailed || onFinishFailedDefault}
      onFieldsChange={onFieldsChange}
    >
      {children}
      {isFieldsChange && (footer || <ButtonsGroup onCancel={onCancel || onCancelDefault} />)}
    </Form>
  );
};
