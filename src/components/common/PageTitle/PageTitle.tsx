import React from 'react';
import { Helmet } from 'react-helmet';

export const PageTitle: React.FC = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Lightence Admin</title>
    </Helmet>
  );
};
