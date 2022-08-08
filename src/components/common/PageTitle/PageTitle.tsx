import { WithChildrenProps } from '@app/types/generalTypes';
import React from 'react';
import { Helmet } from 'react-helmet';

export const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Lightence Admin</title>
    </Helmet>
  );
};
