import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;

  color: ${(props) => props.theme.colors.text.secondary};
`;
