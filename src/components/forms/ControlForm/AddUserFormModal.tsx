import React from 'react';
import { Form as AntdForm, Modal } from 'antd';
import { Form } from '../../common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from '../../common/inputs/Input/Input';
import { InputNumber } from '../../common/inputs/InputNumber/InputNumber';
import { useTranslation } from 'react-i18next';
import { useResetFormOnCloseModal } from './useResetFormOnCloseModal';

interface AddUserFormModalProps {
  visible: boolean;
  onCancel: () => void;
}

export const AddUserFormModal: React.FC<AddUserFormModalProps> = ({ visible, onCancel }) => {
  const [form] = AntdForm.useForm();
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
      <Form form={form} layout="vertical" name="userForm" footer={() => <div />}>
        <FormItem name="name" label={t('common.name')} rules={[{ required: true, message: t('common.requiredField') }]}>
          <Input />
        </FormItem>
        <FormItem name="age" label={t('common.age')} rules={[{ required: true, message: t('common.requiredField') }]}>
          <InputNumber />
        </FormItem>
      </Form>
    </Modal>
  );
};
