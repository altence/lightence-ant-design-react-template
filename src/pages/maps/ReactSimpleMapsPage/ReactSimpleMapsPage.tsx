import React from 'react';

import { useTranslation } from 'react-i18next';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styled, { useTheme } from 'styled-components';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { MapsCard } from '@app/pages/maps/maps.styles';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    markerOffset: -30,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: 'Bogota', coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: 'Quito', coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];

const ReactSimpleMaps: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <PageTitle>{t('common.reactSimpleMaps')}</PageTitle>
      <MapsCardOverride title={t('common.reactSimpleMaps')}>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [58, 20, 0],
            scale: 500,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((d) => d.properties.REGION_UN === 'Americas')
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={theme.colors.main.secondaryBackground}
                    stroke={theme.colors.main.primary}
                  />
                ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates as [number, number]}>
              <g
                fill="none"
                stroke={theme.colors.main.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: 'system-ui', fill: theme.colors.text.main }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </MapsCardOverride>
    </>
  );
};

export default ReactSimpleMaps;

export const MapsCardOverride = styled(MapsCard)`
  height: 100%;
`;
