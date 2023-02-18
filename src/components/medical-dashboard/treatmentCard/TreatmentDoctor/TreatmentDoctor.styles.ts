import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import styled from 'styled-components';
import { BaseCard } from '../../../common/BaseCard/BaseCard';

export const DoctorName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const DoctorCard = styled(BaseCard)`
  background: linear-gradient(to bottom, var(--primary-color) 5rem, var(--secondary-background-color) 5rem);
`;

export const DoctorCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelCol = styled(BaseCol)`
  opacity: 0.5;
`;

export const ValueCol = styled(BaseCol)``;

export const Tel = styled.a`
  color: var(--text-main-color);

  &:hover {
    text-decoration: underline;
  }
`;
