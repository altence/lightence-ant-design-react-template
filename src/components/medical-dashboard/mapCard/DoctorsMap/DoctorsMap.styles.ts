import styled from 'styled-components';
import { CountryMap } from '@app/components/common/CountryMap/CountryMap';

export const DoctorsMap = styled(CountryMap)`
  /* Leaflet uses z-index inside. Create a new stacking context for avoiding overlapping */
  isolation: isolate;
  height: 19rem;

  &.leaflet-container {
    background: ${({ theme }) => theme.dashboardMapBackground};
    border-radius: ${({ theme }) => theme.borderRadius};

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
      fill: ${({ theme }) => theme.dashboardMapCircleColor};
    }

    #pattern-circle-hovered {
      fill: ${({ theme }) => theme.primary};
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};
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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textSecondary};

    &:hover {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.primary};
    }

    &.leaflet-disabled {
      background-color: ${({ theme }) => theme.dashboardMapControlDisabledBackground};
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .leaflet-control-zoom-in {
    margin-bottom: 0.5rem;
  }
`;
