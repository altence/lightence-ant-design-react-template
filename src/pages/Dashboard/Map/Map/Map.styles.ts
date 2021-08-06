import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 322px;

  & .leaflet-bottom.leaflet-right {
    display: none;
  }
`;
