import styled, { css } from 'styled-components';
import { BaseCard as BaseCard } from '@app/components/common/BaseCard/BaseCard';

interface CardInternalProps {
  $isSider: boolean;
}

export const Card = styled(BaseCard)<CardInternalProps>`
  &.ant-card:not(.ant-card-bordered) {
    box-shadow: ${({ theme }) => theme.nft.boxShadow};
  }

  ${(props) =>
    props.$isSider &&
    css`
      background: ${({ theme }) => theme.additionalBackground};
    `};
`;
