import styled from 'styled-components';
import { BaseTypography } from '../BaseTypography/BaseTypography';
import { BaseRate } from '../BaseRate/BaseRate';

export const Profile = styled.div`
  display: flex;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled(BaseTypography.Text)`
  display: flex;
  line-height: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.textDark};
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.primary};
`;

export const Rating = styled(BaseRate)`
  display: flex;
  line-height: 1.15;
`;
