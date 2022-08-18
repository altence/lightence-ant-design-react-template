import styled, { css } from 'styled-components';
import { Card as BaseCard } from '@app/components/common/Card/Card';

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
