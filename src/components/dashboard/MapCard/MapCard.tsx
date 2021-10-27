import React from 'react';
import { Card } from '../../common/Card/Card';
import { DoctorsMap } from './DoctorsMap/DoctorsMap';

export const MapCard: React.FC = () => {
  return (
    <Card id="map" padding={0}>
      <DoctorsMap />
    </Card>
  );
};
