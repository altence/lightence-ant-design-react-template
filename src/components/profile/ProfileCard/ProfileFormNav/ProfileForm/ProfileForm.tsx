import React, { useCallback, useState } from 'react';
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
  onCancel,
  onFinish,
  name,
  children,
}) => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [formDefault] = Form.useForm();

  const { t } = useTranslation();

  const onFieldsChange = useCallback(() => {
    setFieldsChange(true);
  }, [setFieldsChange]);

  const onCancelDefault = useCallback(() => {
    onCancel && onCancel();

    setFieldsChange(false);
    (form || formDefault).resetFields();
  }, [onCancel, setFieldsChange]);

  const onFinishDefault = useCallback(
    (values) => {
      onFinish && onFinish(values);

      !onFinish && notification.open({ message: t('profile.saved') });

      setFieldsChange(false);
    },
    [onFinish],
  );

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

  return (
    <Form
      className={className}
      form={form || formDefault}
      name={name}
      layout="vertical"
      onFinish={onFinishDefault}
      onFinishFailed={onFinishFailedDefault}
      onFieldsChange={onFieldsChange}
    >
      {children}
      {isFieldsChange && (footer || <ButtonsGroup onCancel={onCancelDefault} />)}
    </Form>
  );
};
