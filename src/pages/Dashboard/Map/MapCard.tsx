import React from 'react';
import { Card } from '../../../components/common/Card';
import { Map } from './Map';
import { MapCardHeader } from './MapCardHeader';

export const MapCard: React.FC = () => {
  return (
    <Card title={<MapCardHeader />} padding="0">
      <Map />
    </Card>
  );
};
