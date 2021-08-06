import styled from 'styled-components';
import { Typography } from 'antd';
import { Card as CardStyled } from '../../../../components/common/Card/Card';

export const Card = styled(CardStyled)`
  & .ant-card-body {
    position: relative;
  }
`;

export const Badge = styled(Typography.Text)`
  padding: 0.3rem 1rem;
  border-radius: 7px;
  font-weight: 500;
  position: absolute;
  top: 3%;
  left: 5%;
  z-index: 2;

  background-color: ${(props) => props.theme.colors.primaryLight};

  color: ${(props) => props.theme.colors.primary};
`;
