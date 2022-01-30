import React, { useState } from 'react';
import { Avatar } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { AddUserFormModal } from './AddUserFormModal';
import { Input } from '../../common/inputs/Input/Input';
import { Button } from '../../common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import * as S from './ControlForm.styles';
import { notificationController } from '@app/controllers/notificationController';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

interface UserType {
  name: string;
  age: string;
}

export const ControlForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setFieldsChanged(false);
      setLoading(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { controlForm } = forms;
          const users = controlForm.getFieldValue('users') || [];
          controlForm.setFieldsValue({ users: [...users, values] });
          setVisible(false);
        }
      }}
    >
      <BaseButtonsForm
        {...layout}
        name="controlForm"
        isFieldsChanged={isFieldsChanged}
        footer={
          <BaseButtonsForm.Item>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              {t('common.submit')}
            </Button>
            <S.AddUserButton type="default" htmlType="button" onClick={showUserModal}>
              {t('forms.controlFormLabels.addUser')}
            </S.AddUserButton>
          </BaseButtonsForm.Item>
        }
        onFinish={onFinish}
        onFieldsChange={() => setFieldsChanged(true)}
      >
        <BaseButtonsForm.Item
          name="group"
          label={t('forms.controlFormLabels.groupName')}
          rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
        >
          <Input />
        </BaseButtonsForm.Item>
        <S.UserList
          label={t('forms.controlFormLabels.userList')}
          // eslint-disable-next-line
          shouldUpdate={(prevValues: any, curValues: any) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users: UserType[] = getFieldValue('users') || [];
            return users.length ? (
              <S.List>
                {users.map((user, index) => (
                  <S.ListItem key={index}>
                    <Avatar icon={<UserOutlined />} />
                    <S.User>
                      {user.name} - {user.age}
                    </S.User>
                  </S.ListItem>
                ))}
              </S.List>
            ) : (
              <S.Text>
                ( <SmileOutlined /> {t('forms.controlFormLabels.noUser')} )
              </S.Text>
            );
          }}
        </S.UserList>
      </BaseButtonsForm>
      <AddUserFormModal visible={visible} onCancel={hideUserModal} />
    </BaseButtonsForm.Provider>
  );
};
