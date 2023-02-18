import styled, { css } from 'styled-components';
import { BaseCard as BaseCard } from '@app/components/common/BaseCard/BaseCard';

interface CardInternalProps {
  $isSider: boolean;
}

export const Card = styled(BaseCard)<CardInternalProps>`
  box-shadow: var(--box-shadow-nft-color);

  ${(props) =>
    props.$isSider &&
    css`
      background: var(--additional-background-color);
    `};
`;
