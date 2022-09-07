import { Avatar } from '@app/components/common/Avatar/Avatar';
import { Typography } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CardIssuerImg = styled(Avatar)`
  flex-shrink: 0;
  border: 1px solid var(--border-nft-color);
  padding: 3px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const PaymentCardSystem = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;
  }
`;

export const PaymentCardNumber = styled(Typography.Text)``;
