import styled from 'styled-components';
import { Card as BaseCard } from '@app/components/common/Card/Card';

interface CardInternalProps {
  $isSider: boolean;
}

export const Card = styled(BaseCard)<CardInternalProps>`
  box-shadow: ${(props) => props.theme.boxShadow.nftMain};

  ${(props) => props.$isSider && `background: ${props.theme.colors.main.additionalBackground}`};
`;
