import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 100%;
  z-index: 2;

  & .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
