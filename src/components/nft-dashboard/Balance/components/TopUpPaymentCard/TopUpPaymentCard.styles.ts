import { BaseAvatar } from '@app/components/common/BaseAvatar/BaseAvatar';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardIssuerImg = styled(BaseAvatar)`
  flex-shrink: 0;
  border: 1px solid var(--border-nft-color);
  padding: 3px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const PaymentCardSystem = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
  }
`;

export const PaymentCardNumber = styled(BaseTypography.Text)``;
