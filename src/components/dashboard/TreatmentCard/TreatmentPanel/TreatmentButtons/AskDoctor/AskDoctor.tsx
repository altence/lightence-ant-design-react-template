import React from 'react';
import { notification, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common/buttons/Button/Button';
import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from 'components/common/inputs/Input/Input';

export const AskDoctor: React.FC = () => {
  const { t } = useTranslation();

  const onFinish = async () => {
    notification.open({ message: t('dashboard.treatmentPlan.successQuestion') }); // TODO need to think about default notification from our Form component. Maybe we dont need default message
  };

  return (
    <Form name="askQuestion" onFinish={onFinish}>
      <FormItem>
        <Input placeholder={t('dashboard.treatmentPlan.question')} />
      </FormItem>

      <FormItem>
        <Button block type="primary" htmlType="submit">
          {t('common.ok')}
        </Button>
      </FormItem>
    </Form>
  );
};
