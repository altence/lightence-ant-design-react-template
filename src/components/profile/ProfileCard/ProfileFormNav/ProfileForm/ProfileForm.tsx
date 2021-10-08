import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, FormInstance, notification, Row } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface Error {
  errors: string;
}

interface ProfileFormProps {
  className?: string;
  form?: FormInstance;
  footer?: React.ReactNode;
  trigger?: React.ReactNode;
  onCancel?: () => void;
  onFinish?: (values: []) => void;
  onFinishFailed?: (error: ValidateErrorEntity<[]>) => void;
  name: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  className,
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

  const { t } = useTranslation();

  const onCancelDefault = useCallback(() => {
    (form || formDefault).resetFields();
    setFieldsChange(false);
  }, [setFieldsChange]);

  const onFinishFailedDefault = useCallback(
    (error) =>
      notification.open({
        message: (
          <Row gutter={[20, 20]}>
            {error.errorFields.map((item: Error, index: number) => (
              <Col key={index} span={24}>
                {item.errors}
              </Col>
            ))}
          </Row>
        ),
      }),
    [],
  );

  const onFinishDefault = useCallback((values: []) => {
    console.log(values);

    notification.open({ message: t('profile.saved') });

    setFieldsChange(false);
  }, []);

  const onFieldsChange = useCallback(() => {
    setFieldsChange(true);
  }, [setFieldsChange]);

  useEffect(() => {
    trigger && setFieldsChange(true);
  }, [trigger]);

  return (
    <Form
      className={className}
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
