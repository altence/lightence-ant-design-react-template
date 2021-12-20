import styled from 'styled-components';
import { Card } from '../../../../common/Card/Card';
import { Col } from 'antd';

export const DoctorName = styled.span`
  color: #01509a;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const DoctorCard = styled(Card)`
  background: linear-gradient(to bottom, #c5d3e0 5rem, white 5rem);
`;

export const DoctorCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelCol = styled(Col)`
  opacity: 0.5;
  font-size: 0.875rem;
`;

export const ValueCol = styled(Col)`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: 0.875rem;
`;

export const Tel = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
