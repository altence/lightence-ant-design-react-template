import React from 'react';
import { LatLngExpression } from 'leaflet';
import { GeoJSON, ZoomControl } from 'react-leaflet';
import { MapContainerProps } from 'react-leaflet/types/MapContainer';

import geoData from '../../../assets/map-data/countries.geo.json';
import { FeatureCollection } from 'geojson';

import * as S from './CountryMap.styles';

export const CountryMap: React.FC<MapContainerProps> = ({ children, ...props }) => {
  const MAP_CENTER: LatLngExpression = [57.52142204768359, 6.08795867978202];

  return (
    <S.Map center={MAP_CENTER} zoom={2} zoomControl={false} minZoom={1} maxZoom={5} {...props}>
      <GeoJSON data={geoData as FeatureCollection} />
      <ZoomControl position="bottomleft" />
      {children}
    </S.Map>
  );
};
