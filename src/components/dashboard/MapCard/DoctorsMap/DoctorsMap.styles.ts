import styled from 'styled-components';
import { CountryMap } from '../../../common/CountryMap/CountryMap';

export const DoctorsMap = styled(CountryMap)`
  // Leaflet uses z-index inside. Create a new stacking context for avoiding overlapping
  isolation: isolate;

  &.leaflet-container {
    background: ${(props) => props.theme.colors.mapGradient};

    svg {
      path {
        stroke: transparent;
        fill: url(#map-background);
        fill-opacity: 1;

        &:hover {
          fill: url(#map-background-hovered);
        }
      }
    }

    #pattern-circle {
      fill: ${(props) => props.theme.colors.main.secondary};
    }

    #pattern-circle-hovered {
      fill: ${(props) => props.theme.colors.main.error};
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
  }

  .leaflet-control-zoom {
    border-color: ${(props) => props.theme.colors.main.secondary};
  }

  .leaflet-control-zoom-out,
  .leaflet-control-zoom-in {
    background-color: transparent;
    color: ${(props) => props.theme.colors.main.secondary};

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.main.error};
    }

    &.leaflet-disabled {
      background-color: transparent;
      color: ${(props) => props.theme.colors.main.secondary};
    }
  }

  .leaflet-control-zoom-in {
    border-bottom: 0;

    &:hover {
      border-bottom: 0;
    }
  }
`;
