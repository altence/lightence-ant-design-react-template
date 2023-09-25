import styled from 'styled-components';
import { BaseTypography } from '../BaseTypography/BaseTypography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  max-width: 7.5rem;
`;

export const Text = styled(BaseTypography.Text)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
