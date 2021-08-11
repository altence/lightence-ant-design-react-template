import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 100%;

  & .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
