import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as S from './LoginFormStyles';

const LoginForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/');
  };

  return (
    <S.FormDiv>
      <S.FormTitle>Login</S.FormTitle>
      <S.FormStyled
        name="normal_login"
        className="login-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <S.FormInput
          name="username"
          rules={[{ required: true, message: 'Please input users name or delete this field' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </S.FormInput>
        <S.FormInput name="password" rules={[{ required: true, message: 'Wrong login or password' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </S.FormInput>

        <S.RememberMeContainer>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </S.RememberMeContainer>

        <S.LogInContainer>
          <S.FormButtonStyled type="primary" htmlType="submit" className="login-form-button">
            Login
          </S.FormButtonStyled>
          <S.RegisterNowDiv>
            Don’t have an account? Create one <S.RegisterNowLink href="">here</S.RegisterNowLink>
          </S.RegisterNowDiv>
        </S.LogInContainer>
      </S.FormStyled>
    </S.FormDiv>
  );
};

export default LoginForm;
