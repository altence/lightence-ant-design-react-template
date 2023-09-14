import type { ComponentProps, FC } from 'react';
import { Form, FormInstance } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseFormTitle } from '@app/components/common/forms/components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from '@app/components/common/forms/components/BaseFormItem/BaseFormItem';
import { BaseFormList } from '@app/components/common/forms/components/BaseFormList/BaseFormList';
import { useFeedback } from '@app/hooks/useFeedback';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseFormProps = ComponentProps<typeof Form<any>>;

export type BaseFormInstance = FormInstance;

export interface BaseFormInterface<T> extends FC<T> {
  Title: typeof BaseFormTitle;
  Item: typeof BaseFormItem;
  List: typeof BaseFormList;
  useForm: typeof Form.useForm;
  Provider: typeof Form.Provider;
}

export const BaseForm: BaseFormInterface<BaseFormProps> = ({ onFinishFailed, layout = 'vertical', ...props }) => {
  const { t } = useTranslation();
  const { notification } = useFeedback();

  const onFinishFailedDefault: typeof onFinishFailed = (error) => {
    notification.error({
      message: t('common.error'),
      description: error.errorFields[0].errors,
    });
  };

  return <Form onFinishFailed={onFinishFailed || onFinishFailedDefault} layout={layout} {...props} />;
};

BaseForm.Title = BaseFormTitle;
BaseForm.Item = BaseFormItem;
BaseForm.List = BaseFormList;
BaseForm.useForm = Form.useForm;
BaseForm.Provider = Form.Provider;
