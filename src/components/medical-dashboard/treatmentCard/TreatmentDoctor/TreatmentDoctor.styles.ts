import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import styled from 'styled-components';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

export const DoctorName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const DoctorCard = styled(BaseCard)`
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.primary} 5rem, ${theme.secondaryBackground} 5rem)`};
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
  color: ${({ theme }) => theme.textMain};

  &:hover {
    text-decoration: underline;
  }
`;
