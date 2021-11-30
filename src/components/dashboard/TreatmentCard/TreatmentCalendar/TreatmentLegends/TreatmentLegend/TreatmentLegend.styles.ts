import { Typography } from 'antd';
import styled from 'styled-components';
import { LegendProps } from './intefaces';

export const LegendIcon = styled.div<LegendProps>`
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 4px;
  box-shadow: 0px 5px 15px rgba(0, 89, 171, 0.3);

  ${(props) =>
    props.isPrimary
      ? `border: 1px solid ${props.theme.colors.main.primary}`
      : `background: ${props.theme.colors.main.light}`}
`;

export const Text = styled(Typography.Text)`
  display: block;

  font-size: ${(props) => props.theme.commonFontSizes.xxs};
`;
