import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Treatment as TreatmentProps } from '../../../../constants/treatmentTimeline';

export const Treatment: React.FC<TreatmentProps> = ({ title, date, description, isActive }) => {
  return (
    <Wrapper>
      <Title isActive={isActive}>{title}</Title>
      <Date>
        <CalendarStyled />
        <Typography.Text>{date}</Typography.Text>
      </Date>
      <Typography.Text>{description}</Typography.Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

interface TitleProps {
  isActive?: boolean;
}

const Title = styled.span<TitleProps>`
  color: ${(props) => (props.isActive && props.theme.colors.primary) || 'unset'};
  font-weight: 500;
  font-size: 1rem;
`;

const CalendarStyled = styled(CalendarOutlined)`
  margin-right: 0.75rem;
`;

const Date = styled.div`
  font-size: 0.625rem;
`;
