import React, { useState, useEffect, useRef } from 'react';
import { Form as AntdForm, Modal, Avatar, Typography } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import { Form } from '../../common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from '../../common/inputs/Input/Input';
import { InputNumber } from '../../common/inputs/InputNumber/InputNumber';
import { Button } from '../../common/buttons/Button/Button';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface UserType {
  name: string;
  age: string;
}

interface ModalFormProps {
  visible: boolean;
  onCancel: () => void;
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }: { form: FormInstance; visible: boolean }) => {
  const prevVisibleRef = useRef<boolean>();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel }) => {
  const [form] = AntdForm.useForm();

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm" footer={() => <div />}>
        <FormItem name="name" label="User Name" rules={[{ required: true }]}>
          <Input />
        </FormItem>
        <FormItem name="age" label="User Age" rules={[{ required: true }]}>
          <InputNumber />
        </FormItem>
      </Form>
    </Modal>
  );
};

export const ControlForm: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const handleFinish = (values = {}) => {
    console.log('Finish:', values);
  };

  const onFinish = async (values = {}) => {
    await handleFinish(values);
  };

  return (
    <AntdForm.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({ users: [...users, values] });
          setVisible(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        footer={() => (
          <FormItem>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button type="default" htmlType="button" style={{ margin: '0 8px' }} onClick={showUserModal}>
              Add User
            </Button>
          </FormItem>
        )}
      >
        <FormItem name="group" label="Group Name" rules={[{ required: true }]}>
          <Input />
        </FormItem>
        <FormItem
          label="User List"
          // eslint-disable-next-line
          shouldUpdate={(prevValues: any, curValues: any) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users: UserType[] = getFieldValue('users') || [];
            return users.length ? (
              <ul>
                {users.map((user, index) => (
                  <li key={index} className="user">
                    <Avatar icon={<UserOutlined />} />
                    {user.name} - {user.age}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            );
          }}
        </FormItem>
      </Form>

      <ModalForm visible={visible} onCancel={hideUserModal} />
    </AntdForm.Provider>
  );
};
