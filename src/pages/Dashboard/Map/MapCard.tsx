import React from 'react';
import { Card } from '../../../components/common/Card/Card';
import { Map } from './Map';
import { MapHeader } from './MapHeader';

export const MapCard: React.FC = () => {
  return (
    <Card title={<MapHeader />} padding="0">
      <Map />
    </Card>
  );
};
