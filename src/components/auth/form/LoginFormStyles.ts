import styled from 'styled-components';
import { Form, Button } from 'antd';

export const FormDiv = styled.div`
  width: 22rem;
  background: white;
  padding: 1.25rem 2rem 0.75rem 2rem;
`;

export const FormStyled = styled(Form)``;

export const FormTitle = styled.h2`
  margin-bottom: 1.125rem;
`;

export const FormInput = styled(Form.Item)`
  margin-bottom: 1rem;
`;

export const RememberMeContainer = styled(Form.Item)`
  margin: -0.75rem 0 2.5rem 0;
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: space-between;
  }
`;

export const LogInContainer = styled(Form.Item)`
  margin-bottom: 0;
`;

export const FormButtonStyled = styled(Button)`
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const RegisterNowDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterNowLink = styled.a`
  margin-left: 0.375rem;
`;
