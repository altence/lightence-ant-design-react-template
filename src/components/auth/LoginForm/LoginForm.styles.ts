import styled from 'styled-components';
import { Button, Typography, Input as AntInput, Form, Checkbox } from 'antd';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  padding: 1.875rem 1.875rem 5.5rem 1.875rem;
  width: 20.5rem;

  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: ${(props) => props.theme.border.radius};

  @media only screen and ${theme.media.md} {
    padding: 1.25rem 2rem 0.75rem 2rem;

    background-color: ${(props) => props.theme.colors.secondaryAlpha};
  }

  @media only screen and ${theme.media.xl} {
    padding: 3.75rem 2rem;
    box-shadow: 0px 2px 10px rgba(132, 132, 132, 0.2);
    width: 23rem;
  }
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 1.12rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media only screen and ${theme.media.xl} {
    margin-bottom: 2rem;
  }
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 2rem;
  position: relative;

  & .ant-form-item-control-input {
    min-height: unset;
  }

  & .ant-form-item-explain {
    position: absolute;
    font-size: 0.68rem;
    top: 110%;

    color: ${(props) => props.theme.colors.error};
  }
`;

export const Input = styled(AntInput)`
  font-size: 0.75rem;

  background-color: ${(props) => props.theme.colors.basicLight};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const CheckBox = styled(Checkbox)`
  display: flex;
  align-items: center;

  & .ant-checkbox-inner {
    border-radius: 4px;
  }
`;

export const Text = styled(Typography.Text)`
  font-size: 0.68rem;

  color: ${(props) => props.theme.colors.basicMurky};
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem;
  width: 100%;
`;

export const SignupWrapper = styled.div`
  margin-top: 0.875rem;
  text-align: center;
`;

export const SignupText = styled(Typography.Text)`
  text-decoration: underline;

  color: ${(props) => props.theme.colors.primary};
`;
