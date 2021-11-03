import styled from 'styled-components';
import { Typography } from 'antd';
import { Card as CardStyled } from '../../common/Card/Card';
import theme from 'styles/theme';
import { hexToRGB } from 'utils/utils';

export const Card = styled(CardStyled)`
  & .ant-card-body {
    position: relative;
  }
`;

export const Badge = styled(Typography.Text)`
  padding: 0.125rem 0.375rem;
  font-size: 0.625rem;
  position: absolute;
  top: 3%;
  left: 5%;
  z-index: 2;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.7)};

  color: ${(props) => props.theme.colors.main.primary};

  @media only screen and ${theme.media.md} {
    display: none;
  }
`;
