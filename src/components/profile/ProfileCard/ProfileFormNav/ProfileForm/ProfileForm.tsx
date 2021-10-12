import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, FormInstance, FormProps, notification, Row } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface Error {
  errors: string;
}

interface ProfileFormProps extends FormProps {
  className?: string;
  trigger?: React.ReactNode;
  form?: FormInstance;
  footer?: any;
  onCancel?: () => void;
  onFinish?: (values: []) => void;
  onFinishFailed?: (error: ValidateErrorEntity<[]>) => void;
  name: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  className,
  trigger,
  form,
  footer,
  onCancel,
  onFinish,
  onFinishFailed,
  name,
  children,
  ...props
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [formDefault] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const onFieldsChange = useCallback(() => {
    setFieldsChange(true);
  }, [setFieldsChange]);

  const onCancelDefault = useCallback(() => {
    onCancel && onCancel();

    setFieldsChange(false);
    (form || formDefault).resetFields();
  }, [onCancel, setFieldsChange, form]);

  const onFinishDefault = useCallback(
    (values) => {
      setLoading(true);

      setTimeout(() => {
        onFinish && onFinish(values);

        setFieldsChange(false);
        setLoading(false);
        notification.open({ message: t('profile.saved') });
      }, 1500);
    },
    [onFinish, setFieldsChange],
  );

  const onFinishFailedDefault = useCallback(
    (error) =>
      (onFinishFailed && onFinishFailed(error)) ||
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
    [onFinishFailed],
  );

  useEffect(() => {
    trigger && setFieldsChange(true);
  }, [trigger]);

  return (
    <Form
      className={className}
      form={form || formDefault}
      name={name}
      layout="vertical"
      onFinish={onFinishDefault}
      onFinishFailed={onFinishFailedDefault}
      onFieldsChange={onFieldsChange}
      {...props}
    >
      {children}
      {isFieldsChange && (footer ? footer(loading) : <ButtonsGroup loading={loading} onCancel={onCancelDefault} />)}
    </Form>
  );
};
