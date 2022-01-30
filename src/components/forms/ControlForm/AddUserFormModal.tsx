import React from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Input } from '@app/components/common/inputs/Input/Input';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { useResetFormOnCloseModal } from './useResetFormOnCloseModal';

interface AddUserFormModalProps {
  visible: boolean;
  onCancel: () => void;
}

export const AddUserFormModal: React.FC<AddUserFormModalProps> = ({ visible, onCancel }) => {
  const [form] = BaseForm.useForm();
  const { t } = useTranslation();

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title={t('forms.controlFormLabels.newUser')} visible={visible} onOk={onOk} onCancel={onCancel}>
      <BaseForm form={form} layout="vertical" name="userForm">
        <BaseForm.Item
          name="name"
          label={t('common.name')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Input />
        </BaseForm.Item>
        <BaseForm.Item
          name="age"
          label={t('common.age')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <InputNumber $block />
        </BaseForm.Item>
      </BaseForm>
    </Modal>
  );
};
