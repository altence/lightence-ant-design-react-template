import React from 'react';
import { Card } from '@app/components/common/Card/Card';

export const NFTCard: typeof Card = ({ ...props }) => {
  return <Card autoHeight={false} padding={[24, 20]} {...props} />;
};
