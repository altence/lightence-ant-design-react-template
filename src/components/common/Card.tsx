import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  [key: string]: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};

const CardStyled = styled(AntCard)`
  & .ant-card-head-title {
    color: ${(props) => props.theme.colors.primary};
  }
`;
