import styled from 'styled-components';
import { Card } from '../../../common/Card/Card';
import { Col } from 'antd';

export const DoctorName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const DoctorCard = styled(Card)`
  background: linear-gradient(to bottom, var(--primary-color) 5rem, var(--secondary-background-color) 5rem);
`;

export const DoctorCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelCol = styled(Col)`
  opacity: 0.5;
`;

export const ValueCol = styled(Col)``;

export const Tel = styled.a`
  color: ${(props) => props.theme.colors.text.main};

  &:hover {
    text-decoration: underline;
  }
`;
