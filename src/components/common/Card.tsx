import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

interface CardProps {
  padding?: string | number;
  children: React.ReactNode;
  type?: 'small' | 'medium' | 'large';
  [key: string]: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ type = 'medium', padding, children, ...props }) => {
  return (
    <CardStyled type={type} padding={padding} {...props}>
      {children}
    </CardStyled>
  );
};

const CardStyled = styled(AntCard)<CardProps>`
  min-height: 18.5rem;
  height: ${(props) => (props.type === 'small' ? '18.5rem' : props.type === 'medium' ? '23.5rem' : '28.5rem')};
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);

  & .ant-card-body {
    padding: ${(props) => props.padding};
  }
`;
