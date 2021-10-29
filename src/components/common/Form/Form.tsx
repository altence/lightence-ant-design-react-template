/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form as AntForm, FormInstance, FormProps as AntFormProps, notification, Row } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface Error {
  errors: string;
}

export interface FormProps extends AntFormProps {
  className?: string;
  trigger?: React.ReactNode;
  form?: FormInstance;
  footer?: (loading: boolean, onCancel: () => void) => React.ReactNode;
  onCancel?: () => void;
  onFinish: (values: any) => Promise<any>;
  onFinishFailed?: <T>(error: ValidateErrorEntity<[]>) => Promise<T>;
  name: string;
}

export const Form: React.FC<FormProps> = ({
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
  const [formDefault] = AntForm.useForm();
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

  const setFinished = useCallback(() => {
    setFieldsChange(false);
    setLoading(false);
    notification.open({ message: t('common.saved') });
  }, [setFieldsChange, setLoading]);

  const onFinishDefault = useCallback(
    (values) => {
      setLoading(true);

      onFinish(values).then(() => setFinished());
    },
    [onFinish, setLoading],
  );

  const showErrorsDefault = useCallback((error) => {
    setLoading(false);

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
    });
  }, []);

  const onFinishFailedDefault = useCallback(
    (error) => {
      setLoading(true);

      onFinishFailed
        ? onFinishFailed(error).then(() => notification.open({ message: t('common.formError') }))
        : showErrorsDefault(error);
    },
    [onFinishFailed, showErrorsDefault],
  );

  useEffect(() => {
    trigger && setFieldsChange(true);
  }, [trigger]);

  return (
    <AntForm
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
      {isFieldsChange &&
        (footer ? footer(loading, onCancelDefault) : <ButtonsGroup loading={loading} onCancel={onCancelDefault} />)}
    </AntForm>
  );
};
