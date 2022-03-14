import styled from 'styled-components';
import { Card as BaseCard } from '@app/components/common/Card/Card';

export const Card = styled(BaseCard)`
  box-shadow: ${(props) => props.theme.boxShadow.nftMain};
`;
