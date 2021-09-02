import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import * as S from './LoginForm.styles';

const LoginForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <S.Wrapper>
      <Form layout="vertical" onFinish={handleSubmit}>
        <S.Title>Login</S.Title>
        <S.FormItem name="email" rules={[{ required: true, message: 'Please input users name or delete this field' }]}>
          <S.Input placeholder="Email" />
        </S.FormItem>
        <S.FormItem name="password" rules={[{ required: true, message: 'Wrong login or password' }]}>
          <S.Input placeholder="Password" />
        </S.FormItem>
        <S.ActionsWrapper>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <S.CheckBox>
              <S.Text>Remember me</S.Text>
            </S.CheckBox>
          </Form.Item>
          <Link to="/forgot-password">
            <S.Text>Forgot password?</S.Text>
          </Link>
        </S.ActionsWrapper>
        <Form.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit">
            Login
          </S.SubmitButton>
        </Form.Item>
        <S.SignupWrapper>
          <S.Text>
            Don’t have an account? Create one
            <Link to="/signup">
              <S.SignupText>here</S.SignupText>
            </Link>
          </S.Text>
        </S.SignupWrapper>
      </Form>
    </S.Wrapper>
  );
};

export default LoginForm;
