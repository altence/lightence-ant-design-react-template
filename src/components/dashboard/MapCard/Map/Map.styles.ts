import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 327px;

  & .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
