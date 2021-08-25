import React from 'react';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';

const Error404: React.FC = () => {
  return (
    <MainLayout>
      <Error error={500} />
    </MainLayout>
  );
};

export default Error404;
