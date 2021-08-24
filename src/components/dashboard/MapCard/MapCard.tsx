import React from 'react';
import { Card } from '../../common/Card/Card';
import { Map } from './Map/Map';
import { MapHeader } from './MapHeader/MapHeader';

export const MapCard: React.FC = () => {
  return (
    <Card id="map" title={<MapHeader />} padding={0}>
      <Map />
    </Card>
  );
};
