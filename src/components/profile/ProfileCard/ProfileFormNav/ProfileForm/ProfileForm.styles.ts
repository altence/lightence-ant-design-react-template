import { Typography, Form } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  display: block;
`;

export const FormItem = styled(Form.Item)`
  & label {
    font-weight: 500;

    color: ${(props) => props.theme.colors.main.primary};
  }

  & .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 4rem;

    color: ${(props) => props.theme.colors.main.primary};

    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }

  & .ant-input-group-addon + input + .ant-input-group-addon {
    background-color: transparent;
  }

  & .ant-input-affix-wrapper {
    border-radius: ${(props) => props.theme.border.radius};
  }

  & div[role='alert'] {
    margin: 0.5rem 0;
  }
`;
