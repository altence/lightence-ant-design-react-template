import styled from 'styled-components';
import { Card } from '../../../common/Card/Card';
import { Col } from 'antd';

export const DoctorName = styled.span`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const DoctorCard = styled(Card)`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.main.primary} 5rem, ${props.theme.colors.main.secondaryBackground} 5rem)`};
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

export const ValueCol = styled(Col)`
  color: ${(props) => props.theme.colors.main.primary};
`;

export const Tel = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
