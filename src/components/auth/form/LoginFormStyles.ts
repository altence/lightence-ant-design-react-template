import styled from 'styled-components';
import { Form, Button } from 'antd';

export const FormDiv = styled.div`
  width: 22rem;
  background: white;
  padding: 1rem 2rem 1rem 2rem;
`;

export const FormStyled = styled(Form)``;

export const FormTitle = styled.h2`
  font-weight: 700;
`;

export const RememberMeDiv = styled.div`
  margin: -0.5rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const LogInDiv = styled.div`
  display: flex;
  flex-flow: column;
`;

export const FormButtonStyled = styled(Button)`
  height: 2.5rem;
  font-size: 1rem;
`;

export const RegisterNowDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;
`;
