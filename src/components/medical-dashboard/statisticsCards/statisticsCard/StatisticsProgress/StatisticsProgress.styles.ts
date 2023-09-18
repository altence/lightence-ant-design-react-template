import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

export const ValueText = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const UnitText = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
