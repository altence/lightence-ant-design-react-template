import { Typography } from 'antd';
import styled from 'styled-components';

interface StatusProps {
  $color: string;
}

export const Title = styled(Typography.Text)``;

export const Status = styled(Typography.Text)<StatusProps>`
  color: ${(props) => props.$color};
`;

export const Text = styled(Typography.Text)``;
