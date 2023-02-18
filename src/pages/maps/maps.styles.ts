import styled from 'styled-components';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

export const MapsCard = styled(BaseCard)`
  height: 70vh;
  overflow-y: auto;

  .leaflet-container {
    z-index: 0;
  }
`;
