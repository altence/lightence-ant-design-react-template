import React from 'react';
import { Card } from '../../../components/common/Card/Card';
import { Map } from './Map/Map';
import { MapHeader } from './MapHeader/MapHeader';

export const MapCard: React.FC = () => {
  return (
    <Card title={<MapHeader />} padding="0">
      <Map />
    </Card>
  );
};
