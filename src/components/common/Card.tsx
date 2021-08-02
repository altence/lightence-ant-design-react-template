import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

interface CardProps {
  padding?: string | number;
  children: React.ReactNode;
  $small?: boolean;
  $medium?: boolean;
  $large?: boolean;
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
  min-height: 18.5rem;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;

  height: ${(props) =>
    (props.$small && '18.5rem') || (props.$medium && '23.5rem') || (props.$large && '28.5rem') || '23.5rem'};

  & .ant-card-body {
    padding: ${(props) => props.padding};
    flex-grow: 1;
  }
`;
