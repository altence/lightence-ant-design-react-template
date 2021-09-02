import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, notification } from 'antd';
import * as S from './ForgotPasswordForm.styles';

export const ForgotPasswordForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    notification.open({
      message: 'Success!',
      description: "We've sent to your email address the reset link",
    });

    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <S.Wrapper>
      <Form layout="vertical" onFinish={handleSubmit}>
        <S.Title>Forgot your password?</S.Title>
        <S.Text>Enter your email, we’ll send you the reset link</S.Text>
        <S.FormItem name="email" rules={[{ required: true, message: 'Please input users name or delete this field' }]}>
          <S.Input placeholder="Email" />
        </S.FormItem>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            Reset
          </S.SubmitButton>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};
