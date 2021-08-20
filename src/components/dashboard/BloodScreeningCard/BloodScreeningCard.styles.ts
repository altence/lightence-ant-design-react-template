import styled from 'styled-components';
import { Typography } from 'antd';
import { Card as CardStyled } from '../../common/Card/Card';
import theme from '../../../styles/theme';

export const Card = styled(CardStyled)`
  & .ant-card-body {
    position: relative;
  }
`;

export const Badge = styled(Typography.Text)`
  padding: 0.125rem 0.375rem;
  font-size: 0.625rem;
  font-weight: 500;
  position: absolute;
  top: 3%;
  left: 5%;
  z-index: 2;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.primaryLight};

  color: ${(props) => props.theme.colors.primary};

  @media only screen and ${theme.media.md} {
    display: none;
  }
`;
