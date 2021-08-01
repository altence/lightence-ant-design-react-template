import styled from 'styled-components';
import { Form, Button } from 'antd';
import theme from '../../../styles/theme';

export const FormDiv = styled.div`
  width: 22rem;
  background: white;
  padding: 1.25rem 2rem 0.75rem 2rem;

  @media ${theme.media.md} {
    width: 23rem;
    height: 26.875rem;
    box-shadow: 0px 2px 10px rgb(132 132 132 / 20%);
    padding: 3.375rem 2.25rem 3.75rem 2.25rem;
  }
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

  @media ${theme.media.md} {
    margin-bottom: 3.375rem;
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
