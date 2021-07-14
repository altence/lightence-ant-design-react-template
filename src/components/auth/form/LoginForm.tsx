import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  FormDiv,
  FormStyled,
  FormTitle,
  RememberMeDiv,
  LogInDiv,
  RegisterNowDiv,
  FormButtonStyled,
} from './LoginFormStyles';

const LoginForm: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/');
  };

  return (
    <FormDiv>
      <FormTitle>Login</FormTitle>
      <FormStyled name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={handleSubmit}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>

        <RememberMeDiv>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </RememberMeDiv>

        <LogInDiv>
          <FormButtonStyled type="primary" htmlType="submit" className="login-form-button">
            Login
          </FormButtonStyled>
          <RegisterNowDiv>
            Don’t have an account? Create one <a href="">here</a>
          </RegisterNowDiv>
        </LogInDiv>
      </FormStyled>
    </FormDiv>
  );
};

export default LoginForm;
