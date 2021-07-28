import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

interface CardProps {
  padding?: string | number;
  children: React.ReactNode;
  [key: string]: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ padding, children, ...props }) => {
  return (
    <CardStyled padding={padding} {...props}>
      {children}
    </CardStyled>
  );
};

const CardStyled = styled(AntCard)<CardProps>`
  & .ant-card-body {
    padding: ${(props) => props.padding};
  }
`;
