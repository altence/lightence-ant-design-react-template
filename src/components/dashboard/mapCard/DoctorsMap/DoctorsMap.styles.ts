import { BORDER_RADIUS } from '@app/styles/themes/constants';
import styled from 'styled-components';
import { CountryMap } from '../../../common/CountryMap/CountryMap';

export const DoctorsMap = styled(CountryMap)`
  // Leaflet uses z-index inside. Create a new stacking context for avoiding overlapping
  isolation: isolate;
  height: 19rem;

  &.leaflet-container {
    background-image: var(--dashboard-map-background-color);
    border-radius: ${BORDER_RADIUS};

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
      fill: var(--dashboard-map-dots-color);
    }

    #pattern-circle-hovered {
      fill: var(--dashboard-map-dots-hovered-color);
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    border: 2px solid var(--dashboard-map-marker-border-color);
  }

  .leaflet-control-zoom {
    border: 0;

    &.leaflet-control a {
      line-height: 1.625rem;
      border: 0;
      border-radius: 0.5rem;
    }
  }

  .leaflet-control-zoom-out,
  .leaflet-control-zoom-in {
    background-color: var(--dashboard-map-control-background-color);
    color: var(--dashboard-map-control-color);

    &:hover {
      background-color: var(--dashboard-map-control-background-color);
      color: var(--dashboard-map-dots-hovered-color);
    }

    &.leaflet-disabled {
      background-color: var(--dashboard-map-control-disabled-background-color);
      color: var(--dashboard-map-control-color);
    }
  }

  .leaflet-control-zoom-in {
    margin-bottom: 0.5rem;
  }
`;
