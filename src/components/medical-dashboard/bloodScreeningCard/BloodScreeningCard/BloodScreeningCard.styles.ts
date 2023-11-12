import styled from 'styled-components';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

export const BloodScreeningCard = styled(BaseCard)`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveItem = styled.div`
  background: #ecf6ff;
  height: ${({ theme }) => theme.heights.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
