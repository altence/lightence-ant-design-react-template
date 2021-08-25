import React from 'react';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';

const Error404: React.FC = () => {
  return (
    <MainLayout>
      <Error error={404} />
    </MainLayout>
  );
};

export default Error404;
